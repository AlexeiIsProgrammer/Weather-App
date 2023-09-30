import { styled } from 'styled-components';

export const HourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.padding.medium};
`;
