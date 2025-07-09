import { useState } from "react";
import StartGames from "./components/StartGames";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted(true);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGames toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
