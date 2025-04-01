import React from 'react';
import { IconType } from 'react-icons';

interface ButtonDownloadProps {
  file: string;
  icon: IconType;
  name: string
}

// http://148.229.22.5:4000/laboratories/lab_fisica/pdf/MANUAL_DE_PR%C3%81CTICAS_DE_CALIBRACI%C3%93N_DEL_CALOR%C3%8DMETRO.PDF

// function findTheKey(key: number){
  
// }

const ButtonDownload: React.FC<ButtonDownloadProps> = ({ file, icon: Icon, name}) => {

  const onClick = () => {
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = file;
    console.log('Ok');
    console.log(file);
    // Falta agregar el nombre
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    // <button
    //   type="button"
    //   className="
    //     inline-flex
    //     justify-center
    //     rounded-sm
    //     bg-white
    //     px-4
    //     py-1
    //     ring-1
    //     hover:bg-gray-200
    //     focus:outline-offset-0
    //     items-center
    //     w-auto
    //   "
    //   onClick={onClick}
    // >
    //   <div
    //     className="
    //       flex
    //       flex-row
    //       gap-3
    //       items-center
    //     "
    //   >
    //     <Icon />
    //   </div>
    // </button>

    <a
      href={file}
      className="
        px-1
        inline-flex
        justify-center
        rounded-sm
        bg-white
        sm:px-4
        py-1
        ring-1
        hover:bg-gray-200
        focus:outline-offset-0
        items-center
        sm:w-auto
      "
    >
      <div
        className="
          flex
          flex-row
          gap-3
          items-center
        "
      >
        <Icon />
      </div>
    </a>
  );
};

export default ButtonDownload;
