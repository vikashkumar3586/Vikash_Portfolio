import { useState } from "react";
import NavBar from "./components/NavBar";
import ParticleToggleButton from "./components/ParticleToggleButton";
import AppRouting from "./routes/AppRouting";
import OgBackground from "./services/OgBackground";

function App() {
  const [showBg, setShowBg] = useState(true);

  return (
    <div className="App relative min-h-screen font-sans antialiased max-w-2xl mx-auto">

      {/* Conditional particle background */}
      {showBg && (
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <OgBackground />
        </div>
      )}

      <NavBar />
      <AppRouting />

      {/* Pass toggle state to toggle button */}
      <ParticleToggleButton showParticles={showBg} setShowParticles={setShowBg} />
    </div>
  );
}

export default App;