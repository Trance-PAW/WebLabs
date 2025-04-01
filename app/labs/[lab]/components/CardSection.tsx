import React from 'react'
import CardItems from './CardItems';


const CardSection = () => {
    return (
        <div className="
            flex
            flex-col
            items-center
            sm:flex-col
            xl:flex-row
            lg:flex-row
            max-w-[82rem]
            gap-4
        ">
            <CardItems
                routeImage={"/images/lista-de-verificacion.png"}
                title={"Objetivos"}
                description={"Preparar a estudiantes para desafíos tecnológicos futuros."}
            />
            <CardItems
                routeImage={"/images/gestion-de-instalaciones.png"}
                title={"Infraestructura"}
                description={"Contamos con la herramienta para implementar cualquier práctica."}
            />
        </div>
    );
}


export default CardSection