import Logo from "./components/Logo";
import React from "react";

import { montserrat, quicksand } from "../../utils/fonts";
// import Container from "./Container";
import Item from "./components/Item";
import { RiHomeOfficeLine } from 'react-icons/ri'
import { IoDocumentsOutline } from 'react-icons/io5'
import { BiLastPage,BiUser} from 'react-icons/bi'

const routes = [
  {
      label: "Inicio",
      icon: RiHomeOfficeLine,
      href: '/',
      color: 'text-black'
  },
  // {
  //     label: "Documentos",
  //     icon: IoDocumentsOutline,
  //     href: '/documents',
  //     color: 'text-blue-500'
  // },
  {
      label: "FING",
      icon: BiLastPage,
      href: 'https://uach.mx/fing/',
      color: 'text-blue-500'
  }
]

const Navbar = () => {
  return (
    <nav className="
      py-3
      block
      shadow-sm
      border-b-[1px] 
      ">
        <div className="
          flex
          flex-row
          container
          mx-auto
          justify-center
          items-center
        ">
          {/* <div className="
            flex
            flex-row
            space-x-4
          ">
            <Logo image={'/images/logo_fing.png'} width_={50} height_={50}/>
            <Logo image={'/images/logo_universidad_3.png'} width_={140} height_={140}/>

          </div> */}

          <div className="
            flex 
            flex-row
            space-x-4
          ">
              {routes.map((route, index) =>(
                <div key={index}>
                  <Item icon={route.icon} 
                  label={route.label} 
                  link={route.href}/>
                </div>
              ))}
              
          </div>

        </div>
    </nav>
  );
}

export default Navbar;

