import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EpisodeCard from "../components/EpisodeCard";
import Nav from "../components/Nav";

const Episodes = () => {
  const [eps, setEps] = useState([]);

  const fetchEpisodes = async () => {
    const { data } = await axios.get("https://api.tvmaze.com/shows/4/episodes");
    setEps(data);
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  return (
    <>
      <Nav />
      <main id="episodes">
        <div className="container">
          <div className="row">
            <h1 className="episodes__header">Full list of Arrow episodes:</h1>
            <Link to="/" className="back__btn">
              Back to main page
            </Link>
            <div className="episode__cards">
              {eps.map((episode, index) => (
                <EpisodeCard episode={episode} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Episodes;
