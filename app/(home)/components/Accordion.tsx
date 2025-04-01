"use client";
import { data_laboratories_short_dictionary } from "../../utils/data_short_labs";
import React, { useState } from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";


interface AccordionProps {
  datos_element: data_laboratories_short_dictionary;
  index: number;
}



const Accordion: React.FC<AccordionProps> = ({ datos_element, index }) => {
  const [show, setShow] = useState(false);

  const key = Object.keys(datos_element)[0];
  const datos = datos_element[key];


  return (

    
      <div className="
        p-5
        bg-gray-50
        space-y-4
      "> 
        <AccordionHeader 
          title={`${key}`}

          onClick={() => setShow(!show)} 
          isOpen={show} 
        />
        <AccordionContent 
          show={show} 
          description={datos.description} 
          supervisor={datos.supervisor} 
          index={index} 
        />
      </div>
  );
};

export default Accordion;
