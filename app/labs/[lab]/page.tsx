"use client";

import data_laboratories_large_array from "@/app/utils/data_large_labs";
import { useParams } from "next/navigation";
import Carousel from "./components/Carousel";
import Title from "@/app/components/Title";
import ErrorMessage from "./components/ErrorMessage";
import Description from "./components/Description";
import Guide from "./components/Guide";
import Tools from "./components/Tools";
import CardSection from "./components/CardSection";

export async function generateStaticParams() {
  return [
    { lab: '0' }, { lab: '1' }, { lab: '3' },
    { lab: '4' }, { lab: '5' }, { lab: '6' },
    { lab: '7' }, { lab: '8' }, { lab: '9' },
    { lab: '10' }, { lab: '11' }, { lab: '12' },
    { lab: '13' }, { lab: '14' }
    
  ]
}

export default function Page({ params }: { params: { lab: string } }) {
  const position = params

  if (!data_laboratories_large_array || !data_laboratories_large_array[parseInt(position.lab)]) {
    return <ErrorMessage error={"El contenido no está disponible"} />;
  }

  const lab_data = data_laboratories_large_array[parseInt(position.lab)];
  const lab_key = Object.keys(lab_data)[0];

  if (!lab_key) {
    return <ErrorMessage error={"El contenido no está disponible"} />;
  }

  const { description, supervisor, arrayImages, services, files, toolsGuide} = lab_data[lab_key];

  return (
    <main className="
      flex
      w-full
      justify-center
    ">
        <div className="
          flex  
          flex-col
          items-center
          max-w-[30rem]
          sm:max-w-[82rem]
          mt-10
          mb-10 
          gap-8
          px-12
          sm:px-20
          lg:px-32
          xl:px-36
    ">
        <Title title={`Laboratorio de ${lab_key}`} />
        <Carousel arrayImages={arrayImages}/>
        <Description DescriptionParaph={description} />
        <CardSection />
        <Guide arrayFiles={files} />
        <Tools toolsGuide={toolsGuide} />
      </div>
    </main>
  );
};


