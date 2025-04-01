"use client";
import React, { useState } from "react";
import AccordionHeaderGuide from "../guide/AccordionHeaderGuide";
import AccordionContentGuide from "../guide/AccordionContentGuide";
import AccordionContentTool from "./AccordionContentTool";



  interface AccordionToolsProps {
    toolName: string;
    manuals: { [key: string]: string }[];
  }

const AccordionTool: React.FC<AccordionToolsProps> = ({toolName, manuals}) => {
  const [show, setShow] = useState(false);


  return (
      <div className="
        p-5
        bg-gray-100
        space-y-4
      "> 
        <AccordionHeaderGuide
          title={toolName}
          onClick={() => setShow(!show)} 
          isOpen={show} 
        />
        <AccordionContentTool
          show={show} 
          arrayFiles={manuals}                    
        />
      </div>
  );
};

export default AccordionTool;
