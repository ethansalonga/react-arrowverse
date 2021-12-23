import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";

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

  return (
    <>
      <section id="bio-page">
        <Nav />
        <div className="container">
          <div className="row">
            <Link to="/fullcast" className="back__btn">
              Back to cast list
            </Link>
            <div className="bio__container">
              <figure className="bio__figure">
                <img src={person.image?.original} alt="" className="bio__img" />
              </figure>
              <div className="bio__info">
                <p className="bio__name">{person.name}</p>
                <p className="bio__country">Country: {person.country?.name}</p>
                <p className="bio__birthday">Birthday: {person.birthday}</p>
                <p className="bio__gender">Gender: {person.gender}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CastMember;
