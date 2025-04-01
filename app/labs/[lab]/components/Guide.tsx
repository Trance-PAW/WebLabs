import { quicksand } from "@/app/utils/fonts";
import AccordionGuide from "./guide/AcordionGuide";

interface GuideProps {
    arrayFiles: { [key: string]: string }[];
}

const Guide: React.FC<GuideProps> = ({
    arrayFiles
}) => {

    return(
        <div className="
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
                Manuales de práctica
            </div>
            <AccordionGuide arrayFiles={arrayFiles} />
        </div>
    );
}
export default Guide;