import React from "react";
import './Card.css';

export default function Card(props) {
    return (
        <a className='Card' href={`/Rental/${props.locId}`} >
          <p className="Title">{props.title}</p>
          <img className="CoverImage" src={props.cover} alt={props.title} />
        </a>
    );
};