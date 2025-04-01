import { quicksand } from "@/app/utils/fonts";
import Image from 'next/image'
interface CardItemsProps {
  routeImage: string;
  title: string;
  description: string;
}

const CardItems: React.FC<CardItemsProps> = ({ routeImage, title, description }) => {
  return (
    <div className="
      h-52
      p-4
      flex
      flex-col
      items-center
      justify-center
      rounded-md
      shadow-sm
      space-y-2
      ring-1
      ring-gray-200

      w-full
      mx-auto
    ">  
      <Image
        alt='Icon'
        src={routeImage}
        width={70}
        height={70}
      />
      <div className={`
        text-blue-700
        text-lg
        ${quicksand.className}
        mt-2
      `}>
        {title}
      </div>
      <div className={`
        text-black
        ${quicksand.className}
        text-lg
        text-center
      `}>
        {description}
      </div>
    </div>
  );
}

export default CardItems;
