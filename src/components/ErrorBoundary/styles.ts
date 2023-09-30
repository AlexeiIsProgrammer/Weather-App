import { styled } from 'styled-components';

export const ErrorBlock = styled.div`
  padding: ${(props) => props.theme.padding.large};
  background-color: ${(props) => props.theme.colors.red};
  border: 1px solid ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  text-align: ${(props) => props.theme.textAlign.center};
  font-size: ${(props) => props.theme.fontSizes.rem.medium};
`;
