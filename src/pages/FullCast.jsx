import React from "react";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import CastCard from "../components/CastCard";
import Nav from "../components/Nav";

const FullCast = ({ cast }) => {
  const exportData = cast.map((item) => item.person);

  return (
    <main>
      <Nav />
      <section id="full-cast">
        <div className="container">
          <div className="row">
            <Link to="/" className="back__btn">
              Back to show page
            </Link>
            <div className="cast__cards">
              {cast.map((member, index) => (
                <CastCard member={member} key={index} />
              ))}
            </div>
            <CSVLink data={exportData} className="export__btn">
              Export cast member data to .csv
            </CSVLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FullCast;
