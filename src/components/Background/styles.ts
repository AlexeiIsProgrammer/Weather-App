import styled from 'styled-components';

export const BackgroundContainer = styled.main<{
  $backgroundImage: string;
  $isLoaded: boolean;
}>`
  background-image: ${(props) => props.$backgroundImage};
  height: 100%;
  width: 100%;
  z-index: -1;
  position: fixed;
  left: 0px;
  top: 0px;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: 1s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
