import { quicksand } from "@/app/utils/fonts";
import RowFile from "./RowFile";
import AccordionTool from "./tool/AccordionTool";

interface ToolsProps{
    toolsGuide: { toolName: string; manuals: { [key: string]: string }[] }[];
}

const Tools: React.FC<ToolsProps> = ({
    toolsGuide
}) => {

    return(
        <section className="
            flex
            flex-col
            space-y-4
            w-full
        ">
            <div className={`
                text-black
                ${quicksand.className}
                text-3xl
                font-semibold
            `}>
                Herramientas
            </div>
            <div className={`
                text-black
                ${quicksand.className}
                text-lg
            `}>
                En esta sección puedes descargar todos los manuales disponibles de cada herramienta o equipo con las que cuenta el laboratorio. Cada equipo puedo contar con 1 o más manuales.
            </div>
            <div className="
                flex
                flex-col
                gap-4
            "> 
                {toolsGuide.map((tool, index) => (
                    <div key={index} >
                        <AccordionTool  toolName={tool.toolName} manuals={tool.manuals}/>
                    </div>
                ))

                }
            </div>
        </section>
    );
}
export default Tools;