import Image from "next/image";

function QuestionImage() {
  return (
    <Image
      src="/images/question1.png"
      alt="question"
      width={80}
      height={80}
      className="sm:w-[90px] sm:h-[120px] md:w-[130px] md:h-[150px] lg:w-[150px] lg:h-[250p] mx-12 md:mx-16"
    />
  );
}

export default QuestionImage;
