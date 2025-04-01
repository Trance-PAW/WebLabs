import { montserrat } from "@/app/utils/fonts";
import SocialMedia from "./components/SocialMediaIcon";
import { BiPhoneCall, BiMapAlt } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="
      mt-14
      w-full  
      bg-contact 
      p-8 
      sm:p-10
      md:p-16 
      lg:p-20 
      xl:p-24
      "
    >
      <div className="
        w-full 
        flex 
        flex-col 
        h-1/2
        "
      >
        <div className="
          items-center  
          text-white 
          flex
          flex-col
          justify-center
          space-y-4
          p-2"
        >
          <h1 className={`
            font-black 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl
            ${montserrat.className}`}
          >
            CONTÁCTANOS
          </h1>

          <h1 className={`
            font-normal 
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl
            ${montserrat.className}`}
          >
            Si requieres más información te puedes comunicar con nosotros
            en los siguientes medios.
          </h1>
        </div>

        <div className="
          flex
          items-center
          justify-between
          
          py-5"
        >
          <SocialMedia icon={BiPhoneCall} name={'NÚMERO DE TELÉFONO'}/>
          <SocialMedia icon={AiOutlineMail} name={'CORREO'}/>
          <SocialMedia icon={BsFacebook} name={'FACEBOOK'}/>
          <SocialMedia icon={BiMapAlt} name={'CAMPUS'}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
