import React from 'react';


export default function Button(props) {
  return (
    <div className="genButton" onClick={props.onClick}>{props.children || props.render("text")}</div>
  );
}