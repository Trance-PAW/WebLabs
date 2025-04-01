// import { quicksand } from "../utils/fonts"


// interface ItemProps{
//     label: string
// }

// const Item: React.FC<ItemProps> = ({
//     label
// }) => {

//     return(
//        <div className={`
//             ${quicksand.className}
//             font-bold
//             flex
//             flex-row
//             gap-2
//        `}> 
//             <Icon
//             {label}
//        </div>
//     )
// }

// export default
import { IconType } from 'react-icons'
import { quicksand } from '../../../utils/fonts';
import { link } from 'fs';
import Link from 'next/link';
interface ItemProps {
    icon: IconType,
    label?: string
    link: string
}
const Item: React.FC<ItemProps> = ({
    icon: Icon,
    label,
    link
}) => {
    return (
        <Link
            href={link}
        >
            <button
            type="button"
            className="   
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-white
                px-4
                py-2
                text-gray-500
                shadow-sm
                ring-1
                ring-inset
                ring-gray-300
                hover:bg-gray-50
                focus:outline-offset-0
                items-center
            ">
                <div className="
                    flex
                    flex-row
                    gap-3
                    items-center
                ">
                    <Icon />
                    <p className={`
                        ${quicksand.className}
                        font-semibold
                        text-sm
                    `}>
                        {label}
                    </p>
                </div>
            </button>
        </Link>
    );
}
export default Item;