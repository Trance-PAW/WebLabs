
import { IconType } from 'react-icons'
import { quicksand } from "@/app/utils/fonts";

interface SocialMediaProps{
    icon: IconType;
    name: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
    icon: Icon,
    name
}) => {
    return(
        <div className={`
            flex
            flex-col
            text-base
            font-semibold
            text-white
            items-center
            space-y-4
            ${quicksand.className}
        `}>
            <Icon className="text-6xl  mb-4" />

            {name}
        </div>
    );
};

export default SocialMedia;