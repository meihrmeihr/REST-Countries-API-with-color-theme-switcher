
import { useContext } from "react";
import Cards from "./Cards";
import { ThemeChanger } from "./context/ThemeChangercontext";
function Home() {
  const { isDark } = useContext(ThemeChanger);
  
  return (
    // main section
    <section className={`bg-fixed ${isDark ? "bg-[#202c37] text-[#ffffff]":"bg-[#fcfcfc] text-[#111517]"} font-nunito-sans min-h-[90dvh] h-auto`}>
      <Cards />
    </section>
  );
}

export default Home;
