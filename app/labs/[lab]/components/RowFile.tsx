import { quicksand } from "@/app/utils/fonts";
import ButtonDownload from "./ButtonDownload";
import { FcDownload } from "react-icons/fc";

interface RowFileProps {
  file: { [key: string]: string };
  index: number;
}

const RowFile: React.FC<RowFileProps> = ({ file, index }) => {
  const name = Object.keys(file);
  const route = Object.values(file);

  return (
    <div className="
      w-auto
      overflow-y-auto

      flex
      sm:flex-row
      justify-start
      space-x-4
      sm:space-x-0
      p-4
      space-y-2  
      sm:justify-between
      items-center

    ">
      <p className={`
        text-black
        flex
        text-xs
        sm:text-base
        ${quicksand.className}
      `}>
       {name}
      </p>
      <div className="
        flex 
        items-center
      ">
        <ButtonDownload icon={FcDownload} name={name[0]} file={route[0]} />
      </div>
    </div>
  );
};

export default RowFile;
