import React from "react";
import './Tag.css';

export default function Tag(props) {
    return (
        <p className="tag">{props.tag}</p>
    )
};