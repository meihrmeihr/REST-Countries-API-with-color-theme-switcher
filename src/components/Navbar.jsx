import { useContext } from "react";
import { ThemeChanger } from "./context/ThemeChangercontext";

export default function Navbar() {
  const { isDark, setIsDark } = useContext(ThemeChanger);
  
  function changeColor() {
    setIsDark((prevColor) => !prevColor);
  }
  return (
    <nav
      className={`sticky ${isDark ? "bg-[#2b3945] text-white" : "bg-[#fcfcfc] text-black"} flex justify-between items-center h-[10dvh] px-[4dvw] shadow`}
    >
      <h1 className='md:text-xl font-bold'>Where in the world</h1>
      <button
        className='flex justify-center items-center gap-2 font-semibold text-sm md:text-base'
        onClick={changeColor}
      >
        <svg
          viewBox='0 0 24 24'
          className={`${isDark ? "fill-white" : "stroke-black"}  w-6`}
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z' />
        </svg>
        Dark Mode
      </button>
    </nav>
  );
}
