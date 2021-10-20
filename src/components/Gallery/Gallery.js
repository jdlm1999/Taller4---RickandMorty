import React, { useState, useEffect } from "react";
import "./Gallery.scss";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

export const Gallery = () => {
  const url = "https://rickandmortyapi.com/api/character";
  const [img, setMorty] = useState([]);
  useEffect(() => {
    fetchMortysGifs();
  }, []);

  const fetchMortysGifs = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    const dataGif = data?.results.map((resp) => {
      return {
        id: resp.id,
        url: resp.image,
        title: resp.name,
        gender: resp.gender,
        status: resp.status,
      };
    });
    setMorty(dataGif);
  };

  return (
    <div className="gallery-container">
      {img?.map((d) => (
        <Card>
          <CardImg src={d.url} alt={d.title} className="card-image" />
          <CardBody>
            <CardTitle>{d.title}</CardTitle>
            <CardText>Gender: {d.gender}</CardText>
            <CardText>Status: {d.status}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};