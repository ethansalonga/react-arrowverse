import React from "react";

const ShowCard = ({ item }) => {
  const show = item.show;

  return (
    <div className="show-card">
      <figure className="show-card__figure">
        <img src={show.image?.medium} alt="" className="show-card__img" />
      </figure>
      <div className="show-card__text">
        <p className="show-card__name">{show.name}</p>
        <div className="show-card__info">
          <p>Type: {show.type}</p>
          <p>Genre: {show.genres[0]}</p>
          <p>Status: {show.status}</p>
          <p>{show.summary.replace("<p>", "").replace("</p>", "")}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
