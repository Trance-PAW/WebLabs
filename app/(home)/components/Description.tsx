"use client";

import { quicksand } from "@/app/utils/fonts";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
interface DescriptionProps{
  description: string[]
}

const Description: React.FC<DescriptionProps> = ({
  description
}) => {

  useEffect(() => {
    AOS.init({duration: 1200});
  })
    return(
        <div>
            {description.map((paragraph, index) => (
          <p
            key={index}
            data-aos="zoom-in-up"
            className={`
              text-lg
              leading-loose

              xl:text-xl
              xl:leading-loose

              lg:text-xl
              lg:leading-loose

              sm:text-lg
              sm:leading-loose

              text-justify
              font-normal 
              
              text-black 
              antialiased
              ${quicksand.className}`}
          >
            {paragraph}
          </p>
        ))}
        </div>
    );
}

export default Description;

