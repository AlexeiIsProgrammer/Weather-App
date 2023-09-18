import { styled } from 'styled-components';

const ButtonStyle = styled.button`
  background-color: white;
  outline: none;
  border: 1px solid black;
  padding: 5px 10px;
  font-size: 30px;
  border-radius: 10px;
  transition: 0.3s ease;
  cursor: pointer;
  width: max-content;
  margin: 0 auto;

  &:active {
    border-color: white;
    color: white;
    background-color: black;
  }

  @media (hover: hover) {
    &:hover {
      border-color: white;
      color: white;
      background-color: black;
    }
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`;
export default ButtonStyle;
