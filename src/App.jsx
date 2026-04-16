import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Notfound from "./components/Notfound";
import { Routes, Route } from "react-router-dom";
import ThemeChangerContext from "./components/context/ThemeChangercontext";

const App = () => {
  return (
    <ThemeChangerContext>
      <main>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='detail/:countryName' element={<Detail />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </main>
    </ThemeChangerContext>
  );
};

export default App;
