import styled from 'styled-components';

export const ElasticOptionContainer = styled.button`
  cursor: pointer;

  padding: ${(props) => props.theme.padding.small};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  border: 1px solid ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.black};
  transition: ${(props) => props.theme.transition.fast};

  &:hover {
    opacity: 0.5;
  }
`;
