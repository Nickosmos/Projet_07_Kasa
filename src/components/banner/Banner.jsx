import React from "react";
import './Banner.css';


export default function Banner(props) {
    return (
        <div className="bannercontain">
            <h2 className="bannerTitle">{props.title}</h2>
            <img className="bannerImage" src={props.img} alt={props.altImg} />
        </div>
    );
};