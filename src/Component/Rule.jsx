import { styled } from "styled-components"

const Rule = () => {
  return (
    <RuleContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as{" "}</p>
        <p>if you get wrong guess then 2 point will be deducted </p>
      </div>
    </RuleContainer>
  )
}

export default Rule
const RuleContainer = styled.div`
    background-color: #fbf1f1;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 24px;
    padding: 20px;
    h2{
        font-size: 24px;
        
    }
    .text{
        margin-top: 24px;
    }

`