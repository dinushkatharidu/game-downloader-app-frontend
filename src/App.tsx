import React, { useState } from "react";
import BodySecton from "./components/UpperBodySection";
import Footer from "./components/Footer";
import GameLibrary from "./components/GameLibrary";
import GameSection from "./components/LowerBodySection";
import NavBar from "./components/NavBar";

type Section = "home" | "games";

const App: React.FC = () => {
  
  const [visibleSection, setVisibleSection] = useState<Section>("home");

  
  const handleSectionChange = (section: Section) => {
    setVisibleSection(section);
  };

  return (
    <>
      <NavBar onSectionChange={handleSectionChange} />
      {visibleSection === "home" && (
        <>
          <BodySecton />
          <GameSection />
        </>
      )}
      {visibleSection === "games" && <GameLibrary />}
      <Footer />
    </>
  );
}

export default App;
