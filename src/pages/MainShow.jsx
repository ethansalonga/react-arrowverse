import React from "react";
import CastCard from "../components/CastCard";
import { CSVLink } from "react-csv";

const MainShow = ({ show, cast }) => {
  const exportData = cast.map((item) => item.person);
  console.log(exportData);

  

  return (
    <>
      <div>
        Show name: {show.name}
        Type: {show.type}
        Date premiered: {show.premiered}
        Date ended: {show.ended}
      </div>
      <div>
        Cast members:
        {cast.map((member, index) => (
          <CastCard member={member} key={index} />
        ))}
      </div>
      <CSVLink data={exportData}>Export cast member data to .csv</CSVLink>
    </>
  );
};

export default MainShow;
