import { FilterState } from "@/app/components/FilterProvider";

export const FILTER_REDUCER_ACTIONS = {
  SET_PAGES_FILTER: Symbol("SET_PAGES_FILTER"),
  SET_GENRE_FILTER: Symbol("SET_GENRE_FILTER"),
} as const;

export type FilterReducerAction =
  (typeof FILTER_REDUCER_ACTIONS)[keyof typeof FILTER_REDUCER_ACTIONS];
export type FilterAction = {
  type: FilterReducerAction;
  payload: String | Number;
};

const actions = {
  [FILTER_REDUCER_ACTIONS.SET_PAGES_FILTER]: (
    state: FilterState,
    action: FilterAction
  ) => {
    const newPagesFilter = action.payload;

    return { ...state, pagesFilter: Number(newPagesFilter) };
  },
  [FILTER_REDUCER_ACTIONS.SET_GENRE_FILTER]: (
    state: FilterState,
    action: FilterAction
  ) => {
    const newGenreFilter = action.payload;

    return { ...state, genreFilter: String(newGenreFilter) };
  },
};

export const filterReducer = (state: FilterState, action: FilterAction) => {
  const actionToExecute = actions[action.type];
  return actionToExecute ? actionToExecute(state, action) : state;
};
