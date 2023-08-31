import { styled } from 'styled-components';

export const Main = styled.main<{ $backgroundImage: string }>`
  background-image: ${(props) => props.$backgroundImage};
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MainContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

export const MainSection = styled.section`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
