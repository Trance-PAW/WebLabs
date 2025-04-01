import Logo from "@/app/components/navbar/components/Logo";
import { quicksand } from "@/app/utils/fonts";
import Image from "next/image";

const Middle = () => {
  return (
    <section className="
      flex
      flex-row
      justify-center
      items-center
    ">
      <div className="
        flex
        flex-col
        items-center
        max-w-[50rem]
        xl:flex-row
        lg:flex-row
        sm:flex-col
        sm:w-[40rem]
        sm:h-[30rem]
        lg:w-[55rem]
        lg:h-[25rem]
        xl:w-[60rem]
        xl:h-[30rem]
        gap-8
      ">
        
        <div
          data-aos="zoom-out-right"
          className="
            xl:w-1/3
            lg:w-1/3
            sm:h-1/3
            flex 
            flex-col
            p-4
            justify-center
            items-center
            gap-6

          "
        >
          <h5
            data-aos="zoom-out-right"
            className={`
              text-2xl 
              font-bold 
              tracking-tight 
              text-gray-900 
              dark:text-black 
              ${quicksand.className}
            `}
          >
            Naturam Subiecit Aliis
          </h5>
          <Logo image={'/images/logo_fing.png'} width_={120} height_={120} />
        </div>

        <div className="
            xl:w-2/3
            lg:w-2/3
            sm:h-2/3
            w-full
        ">
          <Image
            className="
              object-cover 
              w-full
              h-full
              rounded-sm"
              src="/images/fing_uach.jpg"
              alt="FING"
              data-aos="zoom-in-left"
              width={300}
              height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Middle;
