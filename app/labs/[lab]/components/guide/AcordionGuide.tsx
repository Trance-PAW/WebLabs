"use client";
import React, { useState } from "react";
import AccordionHeaderGuide from "./AccordionHeaderGuide";
import AccordionContentGuide from "./AccordionContentGuide";



interface AccordionGuideProps {
  arrayFiles: { [key: string]: string }[];
}


const AccordionGuide: React.FC<AccordionGuideProps> = ({arrayFiles}) => {
  const [show, setShow] = useState(false);


  return (
      <div className="
        p-5
        bg-gray-100
        space-y-4
      "> 
        <AccordionHeaderGuide
          title="En esta sección puedes descargar todos los manuales disponibles del laboratorio"
          onClick={() => setShow(!show)} 
          isOpen={show} 
        />
        <AccordionContentGuide 
          show={show} 
          arrayFiles={arrayFiles}                    
        />
      </div>
  );
};

export default AccordionGuide;
