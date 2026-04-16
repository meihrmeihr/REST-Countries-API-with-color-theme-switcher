import { Link } from "react-router-dom";
import countryData from "../data/data.json";
import { useContext, useState } from "react";
import { ThemeChanger } from "./context/ThemeChangercontext";
import Search from "./Search";

export default function Cards() {
  const { isDark } = useContext(ThemeChanger);
  const [region, setRegion] = useState("");
  const [searchForCountry, setSearchForCountry] = useState("");
  const searchByRegion = countryData.filter(
    (country) => country.region.toLowerCase() === region?.toLowerCase(),
  );
  const searchByTyping = countryData.filter(({ name }) =>
    name.toLowerCase().includes(searchForCountry.toLowerCase()),
  );
  const showCountries =
    (searchForCountry !== "" && searchByTyping) ||
    (region !== "" && searchByRegion) ||
    countryData;

  function subInfo(infoType, val) {
    return (
      <p className='text-sm font-semibold pb-1'>
        {infoType} <span className='text-gray-400'>{val}</span>
      </p>
    );
  }

  return (
    <>
      <div className='h-full w-[90dvw] mx-auto'>
        <Search
          setRegion={setRegion}
          setSearchForCountry={setSearchForCountry}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center place-items-center gap-10 gap-y-14 pb-10 mt-5'>
          {showCountries.map((country) => {
            return (
              <Link
                key={country.name}
                to={`/detail/${country.name}`}
                className={`${isDark ? "bg-[#2b3945]" : "bg-white shadow"} h-100 w-full rounded-sm`}
              >
                <img
                  src={country.flag}
                  className=' object-cover h-[60%] w-full rounded-t-sm'
                  alt={`${country.name} flag`}
                />
                <div className='h-[50%] pt-4 pl-4'>
                  <h1 className='text-lg font-bold pb-2'>{country.name}</h1>
                  {subInfo("Population:", country.population.toLocaleString())}
                  {subInfo("Region:", country.region)}
                  {subInfo("Capital:", country.capital)}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
