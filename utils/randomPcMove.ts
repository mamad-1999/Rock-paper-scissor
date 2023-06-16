/* eslint-disable security/detect-object-injection */
const pcMove = [
  {
    title: "rock",
    image: "/images/rock1.png",
  },
  {
    title: "scissor",
    image: "/images/scissors1.png",
  },
  {
    title: "paper",
    image: "/images/paper1.png",
  },
];

export const randomPcMove = () => {
  const randomIndex = Math.floor(Math.random() * pcMove.length);

  return {
    title: pcMove[randomIndex].title,
    image: pcMove[randomIndex].image,
  };
};
