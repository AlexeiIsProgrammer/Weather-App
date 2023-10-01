import { styled } from 'styled-components';

export const EventBlock = styled.div`
  margin-right: ${(props) => props.theme.margin.large};
  flex: 1 0 100%;
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 1400px) {
    margin-right: ${(props) => props.theme.margin.zero};
  }

  padding: ${(props) => props.theme.padding.medium};
`;

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.gap.large};
`;

export const EventTime = styled.span`
  white-space: nowrap;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  font-size: ${(props) => props.theme.fontSizes.em.small};
  padding: ${(props) => props.theme.padding.small};
  border: 1px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.pink};
`;

export const EventSummary = styled.p`
  white-space: nowrap;
  overflow: ${(props) => props.theme.overflow.hidden};
  text-overflow: ${(props) => props.theme.overflow.ellipsis};
  font-size: ${(props) => props.theme.fontSizes.em.medium};
`;
