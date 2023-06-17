"use client"

import { useRef, useEffect } from "react";
import { useGameContext } from "../context/gameContext";
import { Howl } from "howler";

const BombAnimation = () => {
    const { state } = useGameContext()
    const canvasRef = useRef<HTMLCanvasElement>(null);

    let maxParticleCount: number = 100; // set max confetti count
    let particleSpeed = 1; // set the particle animation speed

    let colors = [
        "DodgerBlue",
        "OliveDrab",
        "Gold",
        "Pink",
        "SlateBlue",
        "LightBlue",
        "Violet",
        "PaleGreen",
        "SteelBlue",
        "SandyBrown",
        "Chocolate",
        "Crimson",
    ] as string[];

    const sound = new Howl({
        src: ["/winner.mp3"]
    })
    let streamingConfetti: boolean = false;
    let animationTimer: number | null = null;
    let particles: any[] = [];
    let waveAngle: number = 0;

    const resetParticle = (particle: any, width: number, height: number) => {
        particle.color = colors[(Math.random() * colors.length) | 0];
        particle.x = Math.random() * width;
        particle.y = Math.random() * height - height;
        particle.diameter = Math.random() * 10 + 5;
        particle.tilt = Math.random() * 10 - 10;
        particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
        particle.tiltAngle = 0;
        return particle;
    };

    const startConfetti = () => {
        const width: number = window.innerWidth;
        const height: number = window.innerHeight;
        if (typeof window !== "undefined" && window.requestAnimationFrame) {
            window.requestAnimationFrame =
                window.requestAnimationFrame ||
                function (callback) {
                    return window.setTimeout(callback, 16.6666667);
                };
        }

        const context = canvasRef.current?.getContext("2d");
        if (!context) return;

        while (particles.length < maxParticleCount)
            particles.push(resetParticle({}, width, height));
        streamingConfetti = true;

        if (animationTimer === null) {
            const runAnimation = () => {
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                if (particles.length === 0) {
                    animationTimer = null;
                } else {
                    updateParticles();
                    drawParticles(context);
                    animationTimer = requestAnimationFrame(runAnimation);
                }
            };

            runAnimation();
        }
    };

    const stopConfetti = () => {
        streamingConfetti = false;
    };

    const drawParticles = (context: any) => {
        let particle;
        let x;
        for (let i = 0; i < particles.length; i++) {
            particle = particles[i];
            context.beginPath();
            context.lineWidth = particle.diameter;
            context.strokeStyle = particle.color;
            x = particle.x + particle.tilt;
            context.moveTo(x + particle.diameter / 2, particle.y);
            context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
            context.stroke();
        }
    };

    const updateParticles = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        let particle;
        waveAngle += 0.01;
        for (let i = 0; i < particles.length; i++) {
            particle = particles[i];
            if (!streamingConfetti && particle.y < -15) particle.y = height + 100;
            else {
                particle.tiltAngle += particle.tiltAngleIncrement;
                particle.x += Math.sin(waveAngle);
                particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
                particle.tilt = Math.sin(particle.tiltAngle) * 15;
            }
            if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                if (streamingConfetti && particles.length <= maxParticleCount)
                    resetParticle(particle, width, height);
                else {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }
    };

    useEffect(() => {
        if (state.userScore > 0) {
            startConfetti()
            sound.play()
        } 
        setTimeout(() => {
            stopConfetti()
        }, 800)
        // eslint-disable-next-line react-hooks/exhaustive-deps

        return () => {
            stopConfetti();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            particles = [];
        };
    }, [state.userScore])


    return (
        <div className="absolute w-[350px] md:w-[600px] h-screen mx-auto top-0 right-0 left-0 flex justify-center">
            <canvas className="w-[350px] md:w-[500px]" height={500} ref={canvasRef}></canvas>
        </div>
    );
};

export default BombAnimation;
