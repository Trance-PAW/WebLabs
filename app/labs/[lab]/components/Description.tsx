import { quicksand } from "@/app/utils/fonts";

interface DescriptionProps{
    DescriptionParaph: string[]
}

const Description: React.FC<DescriptionProps> = ({
    DescriptionParaph
}) => {

    return(
        <section className="
            w-full
            space-y-6
        ">
            {DescriptionParaph.map((paragraph, index) => (
                <p
                    key={index}
                    className={`
                        text-lg
                        leading-loose

                        xl:text-xl
                        xl:leading-loose

                        lg:text-xl
                        lg:leading-loose

                        sm:text-lg
                        sm:leading-loose

                        text-justify
                        font-normal 
                        
                        text-black 
                        antialiased
                        ${quicksand.className}`}
                >
                    {paragraph}
                    
                </p>
            ))}
        </section>
    );
}

export default Description;