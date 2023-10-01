import styled from 'styled-components';

export const SelectResultState = styled.p`
  text-align: ${(props) => props.theme.textAlign.center};
  width: ${(props) => props.theme.width.full};
`;

export const ElasticSelectContainer = styled.div`
  position: absolute;
  box-sizing: border-box;

  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;

  z-index: 1;
  top: calc(100% + 10px);
  left: 0;
  overflow-y: ${(props) => props.theme.overflow.auto};

  max-height: ${(props) => props.theme.maxHeight.select};
  width: ${(props) => props.theme.width.full};
  padding: ${(props) => props.theme.padding.medium};
  padding-right: ${(props) => props.theme.padding.large};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  border: 1px solid ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.em.small};
`;

export const CloseSelectButton = styled.button`
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;

  right: 10px;
  top: 10px;

  &::after,
  &::before {
    content: '';
    position: absolute;

    width: 20px;
    height: 2px;

    background-color: black;
  }

  &::after {
    transform: translateY(250%) rotate(-45deg);
  }

  &::before {
    transform: translateY(250%) rotate(45deg);
  }
`;
