import { AppState, BookAction } from "@/app/components/BookProvider";

export const booksActions = {
  MOVE_TO_LECTURA: Symbol("MOVE_TO_LECTURA"),
  LOAD_LIBRARY: Symbol("LOAD_LIBRARY"),
  LOAD_LECTURA: Symbol("LOAD_LECTURA"),
  SAVE_LISTAS: Symbol("SAVE_LISTAS"),
} as const;

export type bookReducerAction =
  (typeof booksActions)[keyof typeof booksActions];

const actions = {
  [booksActions.SAVE_LISTAS]: (state: AppState) => {
    console.log("Saving listas to local storage");
    localStorage.setItem("libros", JSON.stringify(state.library));
    localStorage.setItem("lectura", JSON.stringify(state.lectura));
    return state;
  },
  [booksActions.MOVE_TO_LECTURA]: (state: AppState, action?: BookAction) => {
    if (!action?.payload) return state;
    const { lectura, library } = state;

    const ISBNToMove = action.payload as string;

    const filteredLibrary = library.filter((ISBN) => {
      return ISBN !== ISBNToMove;
    });

    const newLectureList = [...lectura, ISBNToMove];

    return { lectura: newLectureList, library: filteredLibrary };
  },

  [booksActions.LOAD_LIBRARY]: (state: AppState) => {
    console.log("Loading libros from local storage");
    const librosIdsStr = localStorage.getItem("libros");

    const librosIds = JSON.parse(librosIdsStr ?? "[]") as string[];

    if (librosIds.length === 0) {
      return state;
    }
    return { ...state, library: librosIds };
  },

  [booksActions.LOAD_LECTURA]: (state: AppState) => {
    console.log("Loading lectura from local storage");

    const librosIdsStr = localStorage.getItem("lectura");
    const librosIds = JSON.parse(librosIdsStr ?? "[]") as string[];

    if (librosIds) {
      return { ...state, lectura: librosIds };
    }
    return { ...state };
  },
};
export const bookReducer = (state: AppState, action: BookAction) => {
  const actionToExecute = actions[action.type];

  return actionToExecute ? actionToExecute(state, action) : state;
};
