import { useRouter } from "next/router";
import { url } from "node:inspector"; 
import { montserrat } from "../../../utils/fonts";

interface CardFilesProps {
    iconFile: JSX.Element;
    icon: JSX.Element
    description: string
    pdfUrl: string
}

const CardFiles: React.FC<CardFilesProps> = ({ iconFile, icon, description, pdfUrl}) => {
    const handleDownloadClick = () => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "LABORATORIO_MANUAL";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <div className="
            relative 
            flex w-80 
            flex-col 
            bg-white 
            shadow-md 
            text-black ">
            
            <div className="
                p-4 
                flex">

                <div className="
                    mr-2 
                    flex 
                    items-center">

                    <div style={{ 
                        fontSize: "1.5rem" }}>{icon}</div>
                </div>

                <p className="
                    block 
                    font-sans 
                    text-base 
                    font-light 
                    leading-relaxed 
                    text-inherit 
                    antialiased">
                    {description}
                </p>
            </div>

            <div className="
                p-2 
                pt-0 
                flex 
                justify-end">
                
                <a
                    className="
                        !font-medium 
                        !text-blue-gray-900 
                        !transition-colors 
                        hover:!text-black"
                    href="#"
                >
                    <button
                    onClick={handleDownloadClick}
                        className={`
                            flex 
                            select-none 
                            items-center 
                            gap-2 
                            rounded-lg 
                            py-2 
                            px-4 
                            text-center 
                            align-middle 
                            ${montserrat.className} 
                            text-xs 
                            font-bold 
                            uppercase 
                            text-black 
                            transition-all 
                            hover:bg-pink-500/10 
                            active:bg-pink-500/30 
                            disabled:pointer-events-none 
                            disabled:opacity-50 
                            disabled:shadow-none`}
                        type="button"
                        data-ripple-dark="true"
                    >
                        Descargar
                        
                    </button>
                </a>
            </div>
        </div>
    );
}

export default CardFiles