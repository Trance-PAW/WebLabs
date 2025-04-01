import { quicksand } from "@/app/utils/fonts";
import { BiChevronDown } from "react-icons/bi";

const AccordionHeader: React.FC<{ 
  title: string; 
  onClick: () => void; 
  isOpen: boolean }
  > = ({ title, onClick, isOpen }) => {
    
  return (
    <div className="
      flex 
      flex-row
      justify-between 
      items-center 
    ">
      <h1 className={`
        text-xl 
        font-semibold
        text-black 
        ${quicksand.className}
      `}>
        {
          title === 'Centro aeroespacial' ? (
            <>
              {title}
            </>
          ) : title === 'Taller de máquinas y herramientas' ? (
            <>
              {title}
            </>
          ): (
            <>
              Laboratorio de {title}
            </>
          )
        }
      </h1>

      <BiChevronDown 
          onClick={onClick} 
          className={`
            cursor-pointer
            rounded-sm
            ring-1
            text-3xl 
            transition-all 
            duration-500 
            ${isOpen ? "rotate-180 " : ""}
          `}
        />
    </div>
  );
};

export default AccordionHeader;