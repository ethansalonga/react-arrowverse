import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CastMember = () => {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  const fetchPerson = async () => {
    const { data: person } = await axios.get(
      `https://api.tvmaze.com/people/${id}`
    );
    setPerson(person);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  console.log(person);

  return (
    <div>
      {person.name}, {person.country?.name}, {person.birthday}, {person.gender},{" "}
      <img src={person.image?.medium} alt="" />
    </div>
  );
};

export default CastMember;
