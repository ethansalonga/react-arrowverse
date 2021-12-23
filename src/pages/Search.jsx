import React from "react";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import ShowCard from "../components/ShowCard";

const Search = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState([]);

  const fetchShows = async (query) => {
    if (query === "") {
      setShows([]);
    } else {
      const { data: results } = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      setShows(results);
    }
  };

  const handleSearch = () => {
    fetchShows(search);
  };

  useEffect(() => {
    fetchShows("");
  }, []);

  return (
    <>
      <Nav />
      <div id="search">
        <div className="container">
          <div className="search__row">
            <h1 className="search__title">Search for your favorite show</h1>
            <input
              className="search__input"
              type="search"
              placeholder="The Flash, Legends of Tomorrow, Black Lightning, Batwoman..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(event) => event.key === "Enter" && handleSearch()}
            />
            <div className="results__wrapper">
              {shows.map((item, index) => (
                <ShowCard item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
