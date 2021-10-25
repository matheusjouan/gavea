import styled, { css } from 'styled-components';

interface ContainerProps {
  typeOfButton: 'primary' | 'secondary';
}

const buttonTypeVariations = {
  primary: css`
    background-color: #ff6900;
    border: 1px solid #ff6900;
    color: #fff;
  `,
  secondary: css`
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  `,
};

export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 55px;
  border-radius: 4px;
  font-weight: ${props => props.theme.font.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => buttonTypeVariations[props.typeOfButton || 'primary']}
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
