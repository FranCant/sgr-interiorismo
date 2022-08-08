import React from "react";
import Meta from "../components/Meta";
import { Services } from "../components/Services";
import Work from "../components/Works";


function servicios() {
  return (
    <div className="w-full min-h-main pt-24 flex items-center flex-col ">
      <Meta title="Servicios" description='Conoce nuestros trabajos' />
      <Work />
      <Services />
    </div>
  );
}

export default servicios;
