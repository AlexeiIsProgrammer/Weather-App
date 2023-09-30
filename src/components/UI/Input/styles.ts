import { styled } from 'styled-components';

export const InputContainer = styled.div`
  display: block;
  flex: 1;
`;

export const RealInput = styled.input<{ $error?: boolean }>`
  color: ${(props) =>
    props.$error ? props.theme.colors.red : props.theme.colors.black};

  text-align: ${(props) => props.theme.textAlign.center};
  width: ${(props) => props.theme.width.full};
  outline: none;
  background-color: ${(props) => props.theme.colors.transparent};
  padding: ${(props) => props.theme.padding.medium};
  font-size: ${(props) => props.theme.fontSizes.em.small};

  overflow: ${(props) => props.theme.overflow.hidden};
  text-overflow: ${(props) => props.theme.overflow.ellipsis};

  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  transition: ${(props) => props.theme.transition.fast};
  box-shadow: 0px 0px 0px ${(props) => props.theme.colors.black};
  box-sizing: border-box;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 0px 5px ${(props) => props.theme.colors.black};
    }
  }

  &:active {
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 0px 5px ${(props) => props.theme.colors.black};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 0px 5px ${(props) => props.theme.colors.black};
  }
`;
