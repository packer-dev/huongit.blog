"use client";

import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import projects, { Project } from "@/data/projects";

export type AppContextProps = {
  index: number;
  list: { id: string; src: string }[];
  preview: boolean;
  type: number;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  projects: Project[];
};

type Action<T extends keyof AppContextProps> = {
  key: T;
  value: AppContextProps[T]; // The type of value is based on the key
};

// Initial state
const init: AppContextProps = {
  index: 0,
  list: [],
  preview: false,
  type: 0,
  loading: true,
  projects: projects.filter((item) => item.url.length),
};

// Reducer function
const AppReducer = <T extends keyof AppContextProps>(
  state: AppContextProps,
  action: Action<T>
) => {
  return { ...state, [action.key]: action.value };
};

// Define context type
type AppContextType = {
  state: AppContextProps;
  dispatch: Dispatch<Action<keyof AppContextProps>>;
};

// Create context with initial empty values
export const AppContext = createContext<AppContextType>({
  state: init,
  dispatch: () => undefined, // Default dispatch function
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, init);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
