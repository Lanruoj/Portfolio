import { useContext, createContext } from "react";

export const WindowSizeContext = createContext();
export const useWindowSizeContext = () => useContext(WindowSizeContext);
