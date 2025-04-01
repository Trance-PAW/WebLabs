import { quicksand } from "../utils/fonts";

interface TitleProps{
    title: string;
}

const Title: React.FC<TitleProps>  = ({
    title
}) =>{

    return(
       <section className="
            w-full
        ">
            <h1 className={`
                font-bold
                ${quicksand.className}
                text-start
                text-2xl
                sm:text-start
                sm:text-2xl
                lg:text-3xl 
                lg:text-start
                xl:text-4xl
                xl:text-start
            `}>
                {title}
            </h1>
       </section> 
    );
}

export default Title;