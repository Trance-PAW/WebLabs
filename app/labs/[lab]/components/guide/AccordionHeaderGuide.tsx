import { quicksand } from "@/app/utils/fonts";
import { BiChevronDown } from "react-icons/bi";

const AccordionHeaderGuide: React.FC<{ 
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
        text-sm
        sm:text-xl 
        font-normal
        text-black 
        ${quicksand.className}
      `}>
        {title}
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

export default AccordionHeaderGuide;