"use client";

import { initialFilters } from "@/consts/initialFilters";
import { FILTER_REDUCER_ACTIONS, filterReducer } from "@/reducers/filters";
import { createContext, useReducer } from "react";

type FilterContext = {
  state: FilterState;
  setPagesFilter: (newPagesFilter: Number) => void;
  setGenreFilter: (newGenreFilter: String) => void;
};

export type FilterState = { pagesFilter: number; genreFilter: string };

export const FilterContext = createContext<FilterContext | null>(null);

function FilterProvider({ children }: { children: React.ReactNode }) {
  const initialState: FilterState = initialFilters;

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setPagesFilter = (newPagesFilter: Number) => {
    dispatch({
      type: FILTER_REDUCER_ACTIONS.SET_PAGES_FILTER,
      payload: newPagesFilter,
    });
  };

  const setGenreFilter = (newGenreFilter: String) => {
    dispatch({
      type: FILTER_REDUCER_ACTIONS.SET_GENRE_FILTER,
      payload: newGenreFilter,
    });
  };
  return (
    <FilterContext.Provider value={{ state, setGenreFilter, setPagesFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
