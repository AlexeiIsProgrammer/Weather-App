import { styled } from 'styled-components';

export const EventBlock = styled.div`
  margin-right: 30px;
  flex: 1 0 100%;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid black;
  background-color: white;

  @media screen and (max-width: 1400px) {
    margin-right: 0px;
  }

  padding: 10px;
`;

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const EventTime = styled.span`
  white-space: nowrap;
  border-radius: 10px;
  font-size: 15px;
  padding: 5px;
  border: 1px solid black;
  background-color: pink;
`;

export const EventSummary = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 25px;
`;
