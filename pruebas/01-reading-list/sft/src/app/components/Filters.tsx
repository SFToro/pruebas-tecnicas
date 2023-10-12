"use client";
import React, { useContext } from "react";
import { FilterContext } from "./FilterProvider";
import { initialFilters } from "@/consts/initialFilters";
import { getAllGenres } from "@/model/books";

function Filters() {
  const filterContext = useContext(FilterContext);

  if (!filterContext) {
    return <h1>Cannot load filter context</h1>;
  }

  const { state, setPagesFilter, setGenreFilter } = filterContext;

  return (
    <div className="flex">
      <input
        type="range"
        name="PagesFilter"
        min={0}
        max={1000}
        defaultValue={initialFilters.pagesFilter}
        onChange={(e) => {
          setPagesFilter(Number(e.target.value));
        }}
      />
      {state.pagesFilter}
      <select
        name="GenreFilter"
        id="GenreFilter"
        onChange={(e) => {
          setGenreFilter(e.target.value);
        }}
        defaultValue={initialFilters.genreFilter}
      >
        {getAllGenres().map((genre, id) => (
          <option key={id} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
