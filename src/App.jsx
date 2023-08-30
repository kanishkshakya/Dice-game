import { useState } from "react";
import Startgame from "./Component/Startgame"
import GamePlay from "./Component/GamePlay";

function App() {
  
const [isGameStarted,setIsGameStarted] =useState(false);
const togglegameplay = ()=>{
  setIsGameStarted((prev)=>!prev)
}
  return (
    <>
    {isGameStarted ? <GamePlay/> : <Startgame toggle={togglegameplay}/> }
    
    </>
  )
}

export default App
