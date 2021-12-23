import React from "react";
import { Link } from "react-router-dom";

const CastCard = ({ member }) => {
  const {
    person: {
      name,
      image: { medium },
      id,
    },
    character: { name: character },
  } = member;

  return (
    <div className="cast__card">
      <img src={medium} alt="" className="cast__card--img" />
      <p className="cast__card--info">
        <span>
          <Link to={`/${id}`} className="cast__card--name">
            {name}
          </Link>
        </span>
        as {character}
      </p>
    </div>
  );
};

export default CastCard;
