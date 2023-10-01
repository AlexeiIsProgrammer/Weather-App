import styled from 'styled-components';

export const SpinnerAnimation = styled.img`
  height: ${(props) => props.theme.height.full};
  width: ${(props) => props.theme.width.full};
  z-index: -1;
  position: fixed;
  background-image: url(./assets/spinning-cat.gif);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
