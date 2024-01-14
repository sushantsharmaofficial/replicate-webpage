import React from "react";
import puzzle from "./puzzle.webp.jpg";
import people from "./people.jpeg";
import "./Background.css";

export const Background = ({ heroCount }) => {
  if (heroCount === 1) {
    return (
      <img
        className="peopleImage h-full w-full  float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover z-[-1] "
        src={people}
        alt="hands"
      />
    );
  } else {
    return (
      <img
        className="puzzleImage h-full w-full  float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover  z-[-1]"
        src={puzzle}
        alt="puzzle"
      />
    );
  }
};
