import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";

import Data from "../assets/logements.json";


export default function Rental() {

  const {id} = useParams();
  
  const currentRental = Data.find(
    (Rental) => Rental.id === id
  );

  if(!currentRental) {
    return <Error />;
  }else {

  return (
    <main>
      <Slideshow pictures={currentRental.pictures} alt={currentRental.title} />
      <section className="maininfo">
        <div className="titlesection">
          <div className="title">
            <h2>{currentRental.title}</h2>
            <p>{currentRental.location}</p>
          </div>
          <div  className='tags'>
            {currentRental.tags.map((tag, tId) => (
              <Tag key={tId} tag={tag} />
            ))}
          </div>
        </div>
        <div className="ratinghost">
          <div className="host">
            <p className="hostname">{currentRental.host.name}</p>
            <img className="hostpicture" src={currentRental.host.picture} alt="host" />
          </div>
          <div className="rating">
              <Rating rating={currentRental.rating} />
          </div>
        </div>
      </section>
      <section className="otherinfos">
        <div className="halfsize">
          <Collapse 
            title="Description"
            description={currentRental.description}
          />
        </div>
        <div className="halfsize">
          <Collapse
            title="Equipement"
            description={currentRental.equipments.map((equipment, eId) => (
              <span key={eId} className="equipmentlist">{equipment}<br/></span>
            ))}
          />
        </div>
      </section>
    </main>
  );
}};
  
