import React from "react";
import CastCard from "../components/CastCard";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const MainShow = ({ show, cast }) => {
  return (
    <>
      <Nav />
      <main>
        <section id="main-show">
          <div className="container">
            <div className="row">
              <div className="show__container">
                <figure className="show__figure">
                  <img
                    src={show.image?.original}
                    alt=""
                    className="show__img"
                  />
                </figure>
                <div className="show__info">
                  <p className="show__title">{show.name}</p>
                  <p>Type: {show.type}</p>
                  <p>Date premiered: {show.premiered}</p>
                  <p>Date ended: {show.ended}</p>
                  <p className="show__summary">{show.summary?.replace("<p>", "").replace("</p>", "")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="cast-members">
          <div className="container">
            <div className="row">
              <p className="cast__header">Cast members:</p>
              <div className="cast__cards">
                {cast.slice(0, 8).map((member, index) => (
                  <CastCard member={member} key={index} />
                ))}
              </div>
              <Link to="/fullcast" className="full-cast__btn">
                View full cast list
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainShow;
