import styled from "styled-components";

const StartGames = ({toggle}) => {
  return (
    <Container>
      <div>
        <DiceImage src="/Dice-PNG-Photo.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>Dice 
          Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGames;

// Styled Components
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  .content {
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  background-color: #000000;
  border-radius: 5px;
  color: white;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;



  &:hover{
    background-color: #c7d867;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

const DiceImage = styled.img`
  width: 350px;  // adjust width as needed
  height: auto;  // keeps aspect ratio
  object-fit: contain;
`;
