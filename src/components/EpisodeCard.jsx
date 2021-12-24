import React from "react";

const EpisodeCard = ({ episode }) => {
  const {
    image: { original },
    name,
    number,
    season,
    summary,
  } = episode;

  return (
    <div className="episode__card">
      <img src={original} alt="" className="episode__card--img" />
      <div className="episode__card--info">
        <p className="episode__name">{name}</p>
        <p className="episode__number">
          Season {season} Episode {number}
        </p>
        <p className="episode__summary">
          {summary.replace("<p>", "").replace("</p>", "")}
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
