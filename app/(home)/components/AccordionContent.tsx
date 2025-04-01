import { quicksand } from "@/app/utils/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { ImEye } from "react-icons/im"

import Link from "next/link";

interface AccordionContentProps{
    show: boolean;
    description: string;
    supervisor: string;
    index: number;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ 
    show, 
    description, 
    supervisor, 
    index 
}) => {
    return (
      <AnimatePresence>
        {show && (
          <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2}}
                className="overflow-hidden"
            >
                <div className="space-y-2">
                    <p className={`
                        text-base
                        text-justify
                        leading-relaxed
                        line-clamp-2
                        ${quicksand.className}`}
                    >
                        {description}
                    </p>

                    <div className={`
                        ${quicksand.className}`}
                    >
                        Encargado: {supervisor}
                    </div>

                    <div className={`
                        underline 
                        cursor-pointer 
                        flex
                        space-x-2
                        place-items-center
                        ${quicksand.className}`}
                    >
                        {/* <ImEye/> */}
                        <Link href={`
                            /labs/${index}`}
                        >
                            Visita nuestro laboratorio
                            
                        </Link>
                    </div>
                </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
};

export default AccordionContent;