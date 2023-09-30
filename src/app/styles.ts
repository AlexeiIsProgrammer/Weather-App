import { styled } from 'styled-components';

export const MainContainer = styled.div`
  height: ${(props) => props.theme.height.fullScreen};
  overflow-y: ${(props) => props.theme.overflow.auto};
`;

export const MainSection = styled.section`
  max-width: ${(props) => props.theme.maxWidth.medium};
  margin: ${(props) => props.theme.margin.zero}
    ${(props) => props.theme.margin.auto};
  padding: ${(props) => props.theme.padding.zero}
    ${(props) => props.theme.padding.large};
`;
export const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.gap.large};
`;
