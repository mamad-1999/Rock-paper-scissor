"use client";

// --- import necessary react item --- //
import React, {
  createContext,
  useReducer,
  Dispatch,
  useContext,
  useMemo,
} from "react";

// --- state type --- //
type StateType = {
  userScore: number;
  pcScore: number;
  gameTies: number;
  roundCounter: number;
  userSelect: string;
  pcSelect: string;
  userImage: string;
  pcImage: string;
  isClick: boolean;
};

// --- action type {type and payload} --- //
type ActionPayloadType = {
  type: string;
  payload: string;
};

type ActionType = {
  type:
    | "INCREMENT_GAME_TIES"
    | "INCREMENT_USER_SCORE"
    | "INCREMENT_PC_SCORE"
    | "INCREMENT_ROUND"
    | "RESET"
    | "ACTIVE_IS_CLICK"
    | "INACTIVE_IS_CLICK";
};

type ActionReducerType = ActionPayloadType | ActionType;

// --- state --- //
const initialState = {
  userScore: 0,
  gameTies: 0,
  pcScore: 0,
  roundCounter: 0,
  userSelect: "",
  pcSelect: "",
  userImage: "/images/rock2.png",
  pcImage: "/images/rock1.png",
  isClick: false,
} as StateType;

// --- Reducer function --- //
const reducer = (state: StateType, action: ActionReducerType) => {
  switch (action.type) {
    case "INCREMENT_USER_SCORE": {
      return { ...state, userScore: state.userScore + 1 };
    }
    case "INCREMENT_PC_SCORE": {
      return { ...state, pcScore: state.pcScore + 1 };
    }
    case "INCREMENT_GAME_TIES": {
      return { ...state, gameTies: state.gameTies + 1 };
    }
    case "INCREMENT_ROUND": {
      return { ...state, roundCounter: state.roundCounter + 1 };
    }
    case "SET_USER_SYMBOL": {
      return { ...state, userSelect: action.payload };
    }
    case "SET_PC_SYMBOL": {
      return { ...state, pcSelect: action.payload };
    }
    case "SET_USER_IMAGE": {
      return { ...state, userImage: action.payload };
    }
    case "SET_PC_IMAGE": {
      return { ...state, pcImage: action.payload };
    }
    case "ACTIVE_IS_CLICK": {
      return { ...state, isClick: true };
    }
    case "INACTIVE_IS_CLICK": {
      return { ...state, isClick: false };
    }
    case "RESET": {
      return initialState;
    }
    default:
      return state;
  }
};

// --- create context --- //
export const GameContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionReducerType>;
}>({ state: initialState, dispatch: () => null });

// --- provider component --- //
function GameContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameContextProvider;

// --- easy use this context --- //
export const useGameContext = () => useContext(GameContext);
