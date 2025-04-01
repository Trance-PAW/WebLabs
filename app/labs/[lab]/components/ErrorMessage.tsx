import { quicksand } from "@/app/utils/fonts"
import Image from 'next/image'
interface ErrorMessageProps{
    error: string

}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
    error
}) =>{
    return(
        <div className={`
            p-36
            w-full
            h-full
            flex
            flex-row
            space-x-4
            text-black
            ${quicksand.className}
            text-2xl
            items-center
            justify-center
            
        `}>
            <p> {error} </p>
            <Image 
                alt='Icon'
                src='\images\advertencia.png'
                height={50}
                width={50}
            /> 
        </div>
    )

}

export default ErrorMessage