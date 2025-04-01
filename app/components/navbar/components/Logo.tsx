'use client'

import Image from "next/image"
import {useRouter} from "next/navigation";

interface LogoProps{
    image: string
    width_: number
    height_: number
}
const Logo: React.FC<LogoProps> = ({
    image,
    width_,
    height_
}) => {
    return(
        <Image
            alt=""
            className="cursor-pointer"
            height={height_}
            width={width_}
            src={image}
        />
    );
}

export default Logo;