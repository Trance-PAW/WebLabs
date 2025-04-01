import { quicksand } from "@/app/utils/fonts";
import Image from "next/image";

interface IconCareersProps {
  name: string;
  img: string;
}

const IconCareers: React.FC<IconCareersProps> = ({ name, img }) => {
  return (
    <div
      data-aos="flip-left"
      className={`
        flex
        flex-col
        text-lg
        font-semibold
        text-black
        items-center
        space-y-4
        ${quicksand.className}
    `}
    >
      <Image
        alt="Carreras"
        className="cursor-pointer"
        height={100}
        width={100}
        src={img}
      />
      {name}
    </div>
  );
};

export default IconCareers;
