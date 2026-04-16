import { useContext } from "react";
import { ThemeChanger } from "./context/ThemeChangercontext";

export default function Notfound() {
  const { isDark } = useContext(ThemeChanger);
  return (
    <div
      className={`${isDark ? "bg-[#2b3945] text-white" : "bg-[#fcfcfc] text-black"} flex justify-center items-center h-[90dvh] w-full`}
    >
      <h1 className={` text-4xl font-black`}>page not found</h1>
    </div>
  );
}
