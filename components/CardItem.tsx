"use client";
import React from "react";

type Props = {
  image: string;
  description: string;
  name: string;
};

export const CardItem = ({ image, name, description }: Props) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="description-container">
        <p>{name}</p>
        <p>{description}</p>
        <button>Mas informacion</button>
      </div>
    </div>
  );
};
