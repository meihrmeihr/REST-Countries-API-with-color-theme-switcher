import { useContext, useState } from "react";
import { ThemeChanger } from "./context/ThemeChangercontext";

export default function Search({ setRegion, setSearchForCountry }) {
  const { isDark } = useContext(ThemeChanger);
  const [isSelecting, setIsSelecting] = useState(false);

  function options(name,val) {
    return (
      <button
        type='button'
        value={val}
        onClick={(e) => {
          setRegion(e.target.value.toLowerCase());
          setIsSelecting(false);
        }}
      >
        {name}
      </button>
    );
  }
  return (
    <>
      {/* search input and selection is here */}
      <div className='flex flex-col md:flex-row md:justify-between gap-y-4 md:items-center py-4'>
        <div
          className={`relative ${isDark ? "bg-[#2b3945] stroke-white" : "bg-white stroke-black shadow"} rounded-md h-14`}
        >
          <input
            className={`pl-14 py-2 md:w-100 w-full h-full rounded-md outline-blue-900 focus:outline`}
            type='text'
            onChange={(e) => {
              setSearchForCountry(e.target.value.trim());
            }}
            placeholder='search for a country'
          />
          <svg
            viewBox='0 0 24 24'
            className='absolute top-4 left-4 fill-none w-6 stroke-2'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z' />
          </svg>
        </div>

        {/* filteration here */}
        <div className='relative h-14'>
          <button
            className={`${isDark ? "bg-[#2b3945] fill-white" : "bg-white fill-black shadow"} flex justify-center items-center gap-x-2 p-4 rounded-sm w-48 mb-2`}
            type='button'
            onClick={() => setIsSelecting((prevOption) => !prevOption)}
          >
            Filter by Region
            <svg
              viewBox='0 0 1024 1024'
              className=' w-3'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z' />
            </svg>
          </button>
          <div
            className={`absolute ${isDark ? "bg-[#2b3945] fill-white" : "bg-white fill-black shadow"} ${isSelecting ? "flex" : "hidden"} flex-col justify-center items-start gap-y-1 pl-6 py-2 rounded-sm w-48`}
          >
            {options("Africa","africa")}
            {options("America","americas")}
            {options("Asia","asia")}
            {options("Europe","europe")}
            {options("Oceania","oceania")}
          </div>
        </div>
      </div>
    </>
  );
}
