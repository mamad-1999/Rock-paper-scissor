import Image from "next/image";

type GameViewImageProps = {
  image: string;
};

function GameViewImage({ image }: GameViewImageProps) {
  return (
    <Image
      src={image}
      alt="player"
      width={160}
      height={100}
      quality={100}
      priority
      className="sm:w-[280px] sm:h-[130px] md:w-[330px] md:h-[160px] lg:w-[380px] lg:h-[180px]"
    />
  );
}

export default GameViewImage;
