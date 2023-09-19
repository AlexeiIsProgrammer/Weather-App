import { styled } from 'styled-components';

export const InputContainer = styled.div`
  display: block;
  flex: 1;
`;

export const RealInput = styled.input<{ $error?: boolean }>`
  color: ${(props) => (props.$error ? 'red' : 'black')};

  text-align: center;
  width: 100%;
  outline: none;
  background-color: transparent;
  padding: 10px;
  font-size: 20px;

  overflow: hidden;
  text-overflow: ellipsis;

  border: 2px solid black;
  border-radius: 10px;
  transition: 0.3s ease;
  box-shadow: 0px 0px 0px #000;
  box-sizing: border-box;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 0px 5px #000;
    }
  }

  &:active {
    background-color: white;
    box-shadow: 0px 0px 5px #000;
  }

  &:focus {
    border-color: #000;
    background-color: white;
    box-shadow: 0px 0px 5px #000;
  }
`;
