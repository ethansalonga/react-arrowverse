import React from "react";
import { Link } from "react-router-dom";


const CastCard = ({ member }) => {
  const { person: {name, image: {medium}, id}, character: {name: character} } = member;

  return (
    <div>
      <Link to={`/${id}`}>
      {name}
      </Link>
      as {character}
      <img src={medium} alt="" />
    </div>
  );
};

export default CastCard;
