import HeaderSection from "./sections/HeaderSection";
import DayGalerySection from "./sections/DayGalerySection";
import ImagesSection from "./sections/ImagesSection";
import FooterSection from "./sections/FooterSection";

import MapSection from "./sections/location-page/MapSection";

import "./App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<MapSection />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <HeaderSection />
      <DayGalerySection />
      <ImagesSection />
      <FooterSection />
    </>
  );
}

export default App;
