"use client";

import Image from 'next/image'
import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { quicksand } from '@/app/utils/fonts';

const Presentation = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  });

  return (
    <div className="relative h-64 md:h-screen">
      <Image
        src="/images/fing-mural-labs.jpg"
        alt="Mural Ingeniería"
        data-aos="fade-up"
        width={1000}
        height={1000}
        className="
          w-full
          h-full
          object-cover
          absolute 
          inset-0"
        
      />

      <div
        data-aos="fade-up-left"
        className="
          relative
          flex 
          justify-center 
          items-center 
          h-full"
      >
        <div className="
          w-full 
          flex">

          <div className="
            w-1/2 
            h-full
            relative"></div>

          <div className="
            w-1/2 
            h-full
            relative">

            <div className="
              h-1/2 
              flex 
              justify-start">

              <div className="
                bg-uach 
                px-8 
                py-2 
                my-2">

                <h1
                  className={`
                    font-bold 
                    text-white
                    text-2xl
                    sm:text-4xl 
                    md:text-5xl 
                    lg:text-6xl 
                    xl:text-7xl 
                    ${quicksand.className}`}
                >
                  FING
                </h1>
              </div>
            </div>

            <div
              className="
                h-1/2 
                flex
                justify-center 
                items-center 
                px-8 
                py-2 
                my-2 
                ml-0
                sm:ml-0
                md:ml-8
                lg:ml-24"
              style={{
                background: "rgba(0, 0, 0, 0.8)"
              }}
            >
              <h1 
                className={`
                  font-normal 
                  text-white 
                  sm:text-4xl 
                  md:text-5xl 
                  lg:text-6xl 
                  xl:text-7xl 
                  ${quicksand.className}`}
              >
                Laboratorios
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
