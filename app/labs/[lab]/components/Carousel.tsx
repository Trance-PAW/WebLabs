import { Carousel } from "@material-tailwind/react";
import Image from 'next/image'
interface CarouselComponentProps{
  arrayImages: string[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({arrayImages}) => {
  return (
    <Carousel className="
      rounded-md
      w-full
      max-h-[18rem]
      xl:w-full
      lg:w-full
      sm:w-full
      xl:max-h-[30rem]
      lg:max-h-[28rem]
      sm:max-h-[20rem]
      overflow-hidden
      
    ">
      
      {arrayImages.map((file, index) => (
                <Image
                key={index}
                src={file}
                alt={file}
                width={500}
                height={600}
                className="object-cover h-full w-full"
              />
            ))}
    </Carousel>
  );
}

export default CarouselComponent;