
import { AnimatePresence, motion } from "framer-motion";
import RowFile from "../RowFile";


interface AccordionContentGuideProps{
    show: boolean;
    arrayFiles: { [key: string]: string }[];
  }
  
const AccordionContentGuide: React.FC<AccordionContentGuideProps> = ({ 
    show, 
    arrayFiles
}) => {
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2}}
              className="overflow-auto"
          >
            {arrayFiles.map((file, index) => (
                <div key = {index}>
      
                    <RowFile file={file} index={index}/>
                </div>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionContentGuide;