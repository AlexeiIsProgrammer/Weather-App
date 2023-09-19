import { styled } from 'styled-components';

export const DayWrapper = styled.div<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? 'white' : 'black')};
  background-color: ${(props) => (props.$active ? 'blue' : 'white')};

  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
  gap: 5px;
  transform: translateY(0px);
  transition: 0.5s ease;
  cursor: pointer;

  @media (hover: hover) {
    &:not(&__current):hover {
      transform: translateY(-10px);
      box-shadow: 0px 0px 5px #000;
    }
  }

  &:active {
    transform: translateY(-10px);
    box-shadow: 0px 0px 5px #000;
  }
`;

export const DayDate = styled.p``;
export const DayTemp = styled.span`
  font-weight: 600;
`;
export const DayImage = styled.div`
  width: 64px;
  height: 64px;
`;
