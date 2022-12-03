import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
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
  };

  //const rating = currentRental.rating;
  //const ratingArray = [];

  

  return (
    <main>
      <Slideshow />
      <section className="maininfo">
        <div className="titlesection">
          <div className="title">
            <h2>{currentRental.title}</h2>
            <p>{currentRental.location}</p>
          </div>
          <div  className='tags'>
            {currentRental.tags.map((tag, tId) => (
              <p key={tId} className="tag">{tag}</p>
            ))}
          </div>
        </div>
        <div className="ratinghost">
          <div className="host">
            <p className="hostname">{currentRental.host.name}</p>
            <img className="hostpicture" src={currentRental.host.picture} alt="host" />
          </div>
          <div className="rating">

          </div>
        </div>
      </section>
      <section className="otherinfos">
      <Collapse 
        title="Description"
        description={currentRental.description}
      />
      <Collapse
        title="Equipement"
        description={currentRental.equipments.map((equipment, eId) => (
          <li key={eId} className="equipmentlist">{equipment}</li>
        ))}
      />
      </section>
    </main>
  );
};
  
