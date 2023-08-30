import styled from "styled-components"
import { Button } from "../styled/Button"
const Startgame = ({toggle}) => {
  return (
    
      <Container>
        <div><img src="/images/dices.png" alt="" /></div>
        <div className="Content">
    <h1>DICE GAME</h1>
    <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    
  )
}

export default Startgame
const Container = styled.div`
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    div img{
        width: 522px;
    }
    .Content{
        h1{
            font-size: 80px;
            white-space:nowrap;
        }
        
    }
`
