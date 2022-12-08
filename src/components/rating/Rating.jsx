import React from "react";
import Redstar from '../../assets/redstar.svg';
import Greystar from '../../assets/greystar.svg';
import './Rating.css';


export default function Rating(props) {
    
    const rating = props.rating;
    const ratingArray = [];

    for (let r = 0; r < rating; r++) {
        ratingArray.push(
            <img key={r} className="star" src={Redstar} alt="Red star"/>
        )
    }

    for (let g = ratingArray.length; g < 5; g++) {
        ratingArray.push(
            <img key={g} className="star" src={Greystar} alt="Grey star"/>
        )
    }

    return (
        <div className="ratingstar">
            {ratingArray}
        </div>
    )
};