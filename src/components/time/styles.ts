import { styled } from 'styled-components';

export const TimeBlock = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 45px;
`;

export const TimeClock = styled.div`
  text-align: center;
  font-size: 100px;

  @media screen and (max-width: 450px) {
    font-size: 60px;
  }
`;

export const TimeDate = styled.div`
  text-align: center;

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

export const TimeContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: white;
`;

export const TimeCity = styled.div`
  text-shadow: 0px 0px 1px white;
`;
