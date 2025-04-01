
import { AnimatePresence, motion } from "framer-motion";
import RowFile from "../RowFile";

interface AccordionContentToolProps{
    show: boolean;
    arrayFiles: { [key: string]: string }[];
  }
  
const AccordionContentTool: React.FC<AccordionContentToolProps> = ({ 
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
              className="overflow-hidden"
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

export default AccordionContentTool;