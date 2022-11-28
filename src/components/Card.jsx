import React from "react";


export default function Card(props) {
    return (
        <a className='Card' href={`/Locations/${props.locId}`} key={props.locId}>
          <p className="Title">{props.title}</p>
          <img className="CoverImage" src={props.cover} alt={props.title} />
        </a>
    );
};