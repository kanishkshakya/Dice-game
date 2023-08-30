import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { Button, OutlineButton } from "../styled/Button"
import Rule from "./Rule"


const GamePlay = () => {
    const [score,setScore]=useState(0)
    const [currentDice,setCurrentDice] =useState(1)
    const [selectedNumber,setSelectedNumber]=useState()
    const [error,setError] =useState("")
const [showRule,setShowRule] =useState(false)
    const generateRandomNumber =(min,max)=>{        
        return Math.floor(Math.random()*(max - min) + min)
    }

    const roleDice = ()=>{     
      if(!selectedNumber){
        setError("You have not selected any number")
        return;
      }
        const randomNumber =generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber)

        if(selectedNumber === randomNumber){
            setScore(prev =>prev + randomNumber)
        }else{
            setScore(prev => prev - 2)
        }
        setSelectedNumber(undefined);
    }

    const resetscore = ()=>{
      setScore(0)
    }
    



  return (
    <MainContainer >
      <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelector setError={setError} error={error}  selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <div>
        <RollDice currentDice={currentDice} roleDice={roleDice}/>
      </div>
      <div className="btns">
        <OutlineButton onClick={resetscore}>Reset</OutlineButton>
        <Button onClick={() =>setShowRule((prev) =>!prev)} >{!showRule ?"Show" :"Hide"} Rule</Button>
      </div>
      {showRule && <Rule/>}
    </MainContainer>
    
  )
}

export default GamePlay
const MainContainer =styled.div`
      max-height: 100vh;
    .top_section{

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: end;
        margin-top: 40px;

    }
    .btns{
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
`