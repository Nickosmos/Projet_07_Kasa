import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
//import Collapse from "../components/Collapse";

import Data from "../assets/logements.json";


export default function Rental() {

  const {id} = useParams()
  
  const currentRental = Data.find(
    (Rental) => Rental.id === id
  );

  if(!currentRental) {
    return <Error />;
  };

  
  return (
    <div className='main'>
      <Carrousel />
        <section className="titleSection">
          <div className="title">
            <h2>Cozy loft on the Canal Saint-Martin</h2>
            <p>Paris, Île-de-France</p>
            <section  className='tags'>
              {Data.map((Rental) => {
              return (
              <Tag locId={Rental.id} key={id} title={Rental.title} cover={Rental.cover} />
              )})}
            </section>
          </div>
        </section>

      </div>
  );
};
  
