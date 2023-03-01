import Columns from "./components/Columns";
import React, { useState } from "react";
import "./style/App.css";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      avatar: "avatar-sedans",
      name: "SEDANS",
      text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
      bg: " section-sedans box ",
    },
    {
      id: 2,
      avatar: "avatar-suvs",
      name: "SUVs",
      text: "  Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      bg: " section-suvs  box",
    },
    {
      id: 3,
      avatar: "avatar-luxury",
      name: "LUXURY",
      text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      bg: " section-luxury box",
    },
  ]);

  return (
    <>
      <Columns data={data} />
      <Footer/>
    </>
  );
}

export default App;
