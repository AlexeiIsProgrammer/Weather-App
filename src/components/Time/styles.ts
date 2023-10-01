import { styled } from 'styled-components';

export const TimeBlock = styled.div`
  font-family: ${(props) => props.theme.fonts.join(', ')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.rem.normal};
  margin-top: ${(props) => props.theme.margin.medium};
`;

export const TimeClock = styled.div`
  text-align: ${(props) => props.theme.textAlign.center};
  font-size: ${(props) => props.theme.fontSizes.rem.large};

  @media screen and (max-width: 450px) {
    font-size: ${(props) => props.theme.fontSizes.rem.medium};
  }
`;

export const TimeDate = styled.div`
  text-align: ${(props) => props.theme.textAlign.center};

  @media screen and (max-width: 450px) {
    font-size: ${(props) => props.theme.fontSizes.rem.small};
  }
`;

export const TimeContainer = styled.div`
  padding: ${(props) => props.theme.padding.large};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
`;

export const TimeCity = styled.div`
  text-shadow: 0px 0px 1px ${(props) => props.theme.colors.white};
`;
