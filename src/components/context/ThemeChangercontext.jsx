import { createContext, useState } from "react";

export const ThemeChanger = createContext({});
export default function ThemeChangerContext({ children }) {
  const [isDark,setIsDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const val = {isDark,setIsDark}
  return <ThemeChanger.Provider value={val} >{children}</ThemeChanger.Provider>;
}