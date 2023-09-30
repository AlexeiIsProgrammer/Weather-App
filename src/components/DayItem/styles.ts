import { styled } from 'styled-components';

export const DayWrapper = styled.div<{ $active?: boolean }>`
  color: ${(props) =>
    props.$active ? props.theme.colors.white : props.theme.colors.black};
  background-color: ${(props) =>
    props.$active ? props.theme.colors.blue : props.theme.colors.white};

  padding: ${(props) => props.theme.padding.small};
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
  gap: ${(props) => props.theme.gap.small};
  transform: translateY(0px);
  transition: ${(props) => props.theme.transition.slow};
  cursor: pointer;

  @media (hover: hover) {
    &:not(&__current):hover {
      transform: translateY(-10px);
      box-shadow: 0px 0px 5px ${(props) => props.theme.colors.black};
    }
  }

  &:active {
    transform: translateY(-10px);
    box-shadow: 0px 0px 5px ${(props) => props.theme.colors.black};
  }
`;

export const DayDate = styled.p``;
export const DayTemp = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
export const DayImage = styled.div`
  width: ${(props) => props.theme.iconSize.small};
  height: ${(props) => props.theme.iconSize.small};
`;
