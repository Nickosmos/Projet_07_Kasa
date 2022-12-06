import React from "react";
import { useState } from "react";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";


export default function Slideshow(props) {

    const totalPictures = props.pictures.length;
    const [currentPicture, setCurrentPicture] = useState(0);

    if (totalPictures === 1) {
        return (
            <div className="slideshow">
                <img className="pictureslide" src={props.pictures} alt={props.alt}></img>
            </div>
        )
    }else {

    const nextPicture = () => {
        setCurrentPicture(currentPicture === totalPictures - 1 ? 0 : currentPicture + 1)
    };

    const previousPicture = () => {
        setCurrentPicture(currentPicture === 0 ? totalPictures - 1 : currentPicture - 1)
    }; 

    return (
        <div className="slideshow">
            <div className="slidefunction">
                <div className="arrows">
                    <button onClick={nextPicture} className="arrowbutton">
                        <img src={rightarrow} alt="arrow" />
                    </button>
                    <button onClick={previousPicture} className="arrowbutton">
                        <img src={leftarrow} alt="arrow" />
                    </button>
                </div>
                <p className="counter">
                    {currentPicture + 1} / {totalPictures}
                </p>
            </div>
            {props.pictures.map((picture, pId) => {
                if (pId === currentPicture) {
                    return (
                        <img key={pId} className="pictureslide"
                        src={picture} alt={props.alt} />
                        );
                }else {
                    return "";
                }
            })}
        </div>
    );
}};