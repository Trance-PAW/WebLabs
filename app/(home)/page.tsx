import React from 'react';
import Presentation from './components/Presentation';
import Introduction from './components/Introduction';
import datos_laboratorios_array from '@/app/utils/data_short_labs';
import Description from './components/Description';
import CareersList from './components/Careers';
import Middle from './components/Middle';
import Accordion from './components/Accordion';

export default function Home() {
  return (
    <main  className="
        flex
        flex-col
      ">
        <Presentation />
        <div className="
          mt-6
          flex
          flex-col
          gap-12
          px-10
          sm:px-40
          lg:px-56
          xl:px-64

        ">
            <Middle />
            <Introduction />
            <CareersList />
            <Description description={["Actualmente tenemos 15 laboratorios donde los investigadores y profesores trabajan en conjunto con estudiantes para abordar problemas reales y desarrollar soluciones innovadoras que puedan ser aplicadas en el sector industrial y en la sociedad en general."]} />
            <div className="space-y-4">
              {datos_laboratorios_array.map((dato, index) => (
                <div key={index}>
                  <Accordion datos_element={dato} index={index} />
                </div>
              ))}
            </div>
            
        </div>
    
    </main>
  );
}
