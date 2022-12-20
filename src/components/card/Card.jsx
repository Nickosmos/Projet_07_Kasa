import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

export default function Card(props) {
    return (
        <Link className='Card' to={`/Rental/${props.locId}`} >
          <p className="Title">{props.title}</p>
          <img className="CoverImage" src={props.cover} alt={props.title} />
        </Link>
    );
};