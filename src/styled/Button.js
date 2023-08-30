import styled from "styled-components";
export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  min-width: 120px;
  border: none;
  font-size: 14px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.4s all ease-in;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
    cursor: pointer;
    transition: 0.3s all ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 2px solid black;
  color: black;
  padding: 8px 12px;

  &:hover {
    background-color: black;
    border: 2px solid transparent;
    color: white;
  }
`;
