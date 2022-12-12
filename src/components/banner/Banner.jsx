import React from "react";
import './Banner.css';


export default function Banner(props) {
    return (
        <div className="bannercontain">
            <h2 className="bannerTitle">{props.title}</h2>
            <img className="bannerDesktop" src={props.imgdesk} alt={props.altImg} />
            <img className="bannerMobile" src={props.imgmob} alt={props.altImg} />
        </div>
    );
};