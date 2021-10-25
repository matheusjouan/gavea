import styled from 'styled-components';

interface ContainerProps {
  justifyContent: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  padding: 0 21px 21px;

  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
`;
