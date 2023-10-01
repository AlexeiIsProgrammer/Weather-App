import { styled } from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.black};
  padding: ${(props) => props.theme.padding.small}
    ${(props) => props.theme.padding.medium};
  font-size: ${(props) => props.theme.fontSizes.em.medium};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  transition: ${(props) => props.theme.transition.fast};
  cursor: pointer;
  width: ${(props) => props.theme.width.maxContent};
  margin: ${(props) => props.theme.margin.zero}
    ${(props) => props.theme.margin.auto};

  &:active {
    border-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.black};
    }
  }

  @media (max-width: 440px) {
    width: ${(props) => props.theme.width.full};
  }
`;
export default ButtonStyle;
