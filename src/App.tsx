import HeaderSection from "./sections/HeaderSection";
import DayGalerySection from "./sections/DayGalerySection";
import ImagesSection from "./sections/ImagesSection";
import FooterSection from "./sections/FooterSection";

import MapSection from "./sections/location-page/MapSection";
import LocationInfoSection from "./sections/location-page/LocationInfoSection";

import "./App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<LocationPage />} />
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

function LocationPage() {
  return (
    <>
      <MapSection />
      <LocationInfoSection />
    </>
  );
}

export default App;
