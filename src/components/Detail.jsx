import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeChanger } from "./context/ThemeChangercontext";
import countryData from "../data/data.json";
export default function Detail() {
  const { isDark } = useContext(ThemeChanger);
  const { countryName } = useParams();
  const detail = countryData.find((tar) => tar.name === countryName);

  function info(typeInfo, information) {
    if (information instanceof Array) {
      return (
        <p>
          {typeInfo}:{" "}
          <span className='text-gray-400'>{information.join(", ")}</span>
        </p>
      );
    }
    return (
      <p>
        {typeInfo}: <span className='text-gray-400'>{information}</span>
      </p>
    );
  }

  function borderCountry() {
    return detail.borders?.map((border) => {
      if (!border) return <span className='text-gray-400 bg'>no border</span>;

      return (
        <Link
          key={border}
          to={`/detail/${countryData.find((tar) => tar.alpha3Code === border).name}`}
          className={`${isDark ? "bg-[#2b3945] text-[#ffffff]" : "bg-[#fcfcfc] text-[#111517]"} shadow rounded-sm py-1 px-4`}
        >
          {border}
        </Link>
      );
    });
  }

  if (detail === undefined)
    return (
      <h1
        className={`${isDark ? "bg-[#2b3945] text-white" : "bg-[#fcfcfc] text-black"} text-center text-4xl font-black w-full h-[90dvh] pt-40`}
      >
        Data Not Found
      </h1>
    );
  return (
    <div
      className={`${isDark ? "bg-[#202c37] text-[#ffffff] fill-white" : "bg-[#fcfcfc] text-[#111517] fill-black"} w-full min-h-[90dvh] h-auto`}
    >
      <div className=' flex flex-col gap-y-10 h-full w-[90%] mx-auto pt-6 pb-2 lg:py-10'>
        <Link
          to={`/`}
          className={`${isDark ? "bg-[#2b3945]" : "bg-[#fcfcfc]"} flex justify-center items-center gap-x-2 font-thin py-1.5 px-4 w-30 rounded-sm shadow`}
        >
          <svg
            viewBox='0 0 24 24'
            className='w-6'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z'
            />
          </svg>
          Back
        </Link>
        {/* details are here */}
        <div className='flex flex-col sm:flex-row justify-between lg:justify-between sm:items-center h-full w-full'>
          {/* the flag image */}
          <img
            src={detail.flag}
            className='object-cover sm:scale-y-180 md:scale-y-120 lg:scale-100 w-full sm:w-[40%] h-full'
            alt={`${detail.name} flag`}
          />
          {/* details */}
          <div className='flex flex-col gap-y-6 sm:w-[50%] w-full mt-5 lg:mt-0'>
            <h1 className='text-2xl font-bold'>{detail.name}</h1>
            <div className='flex flex-col sm:flex-row sm:justify-between gap-y-6 lg:gap-y-0'>
              <div className='flex flex-col gap-y-2'>
                {info("Native Name", detail.nativeName)}
                {info("Population", detail.population.toLocaleString())}
                {info("Region", detail.region)}
                {info("Sub Region", detail.subregion)}
                {info("Capital", detail.capital)}
              </div>
              <div className='flex flex-col gap-y-2'>
                {info("Top Level Domain", detail.topLevelDomain)}
                {info(
                  "Currencies",
                  detail.currencies.map((currency) => currency.name),
                )}
                {info(
                  "Language",
                  detail.languages.map(({ name }) => name),
                )}
              </div>
            </div>
            <div className={`flex justify-baseline items-center gap-x-1`}>
              <h1>Border Countries:</h1>
              <div className='flex flex-wrap gap-2'>{borderCountry()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
