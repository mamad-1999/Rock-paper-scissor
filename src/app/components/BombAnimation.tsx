"use client";

/* eslint-disable security/detect-object-injection */

import { useRef, useEffect } from "react";
import { Howl } from "howler";
import { useGameContext } from "../context/gameContext";

function BombAnimation() {
  const { state } = useGameContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const maxParticleCount = 100; // set max confetti count
  const particleSpeed = 1; // set the particle animation speed

  const colors = [
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

  type Particle = {
    color: string;
    x: number;
    y: number;
    diameter: number;
    tilt: number;
    tiltAngleIncrement: number;
    tiltAngle: number;
  };

  const sound = new Howl({
    src: ["/winner.mp3"],
  });

  let streamingConfetti = false;
  let animationTimer: number | null = null;
  let particles: Particle[] = [];
  let waveAngle = 0;

  const resetParticle = (particle: Particle, width: number, height: number) => {
    return {
      ...particle,
      color: colors[Math.floor(Math.random() * colors.length)],
      x: Math.random() * width,
      y: Math.random() * height - height,
      diameter: Math.random() * 10 + 5,
      tilt: Math.random() * 10 - 10,
      tiltAngleIncrement: Math.random() * 0.07 + 0.05,
      tiltAngle: 0,
    };
  };

  const updateParticles = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const newParticles = [...particles];
    waveAngle += 0.01;
    for (let i = 0; i < newParticles.length; i += 1) {
      let particle = newParticles[i];
      if (!streamingConfetti && particle.y < -15) {
        particle = { ...particle, y: height + 100 };
      } else {
        particle = {
          ...particle,
          tiltAngle: particle.tiltAngle + particle.tiltAngleIncrement,
          x: particle.x + Math.sin(waveAngle),
          y:
            (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5 +
            particle.y,
          tilt: Math.sin(particle.tiltAngle) * 15,
        };
      }
      if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
        if (streamingConfetti && newParticles.length <= maxParticleCount) {
          newParticles[i] = resetParticle(particle, width, height);
        } else {
          newParticles.splice(i, 1);
          i -= 1;
        }
      } else {
        newParticles[i] = particle;
      }
    }
    particles = newParticles;
  };

  const drawParticles = (context: CanvasRenderingContext2D) => {
    let particle;
    let x;
    for (let i = 0; i < particles.length; i += 1) {
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

  const startConfetti = () => {
    const width: number = window.innerWidth;
    const height: number = window.innerHeight;
    if (typeof window !== "undefined" && window.requestAnimationFrame) {
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        function requestAnimationFrame(callback) {
          return window.setTimeout(callback, 16.6666667);
        };
    }

    const context = canvasRef.current?.getContext("2d");
    if (!context) return;

    while (particles.length < maxParticleCount)
      particles.push(resetParticle({} as Particle, width, height));
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

  useEffect(() => {
    if (state.userScore > 0) {
      startConfetti();
      sound.play();
    }
    setTimeout(() => {
      stopConfetti();
    }, 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return () => {
      stopConfetti();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      particles = [];
    };
  }, [state.userScore]);

  return (
    <div className="absolute w-[350px] md:w-[600px] h-screen mx-auto top-0 right-0 left-0 flex justify-center">
      <canvas className="w-[350px] md:w-[500px]" height={500} ref={canvasRef} />
    </div>
  );
}

export default BombAnimation;
