/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  &:hover, &:active {
    .iconLeft {
      color: ${props => props.theme.colors.orange};
    }
  }

  .iconLeft {
    position: absolute;
    left: 20px;
    top: 18px;
    color: ${props => props.theme.colors.grey};
    transition: color 0.3s;
  }

  .iconRight {
    position: absolute;
    right: 20px;
    top: 18px;
    color: #748c94;
    transition: color 0.3s;
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 55px;
    padding: 20px 50px;
    font-family: ${theme.font.family.karla};
    border: 1px solid ${theme.colors.lightBlue};
    border-radius: 4px;
    transition: border-color 0.3s;

    &::placeholder {
      color: ${theme.colors.lightGrey};
      font-size: 16px;
    }

    &:hover,
    &:active {
      border-color: ${theme.colors.orange};
    }
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-top: 5px;
    color: ${theme.colors.red};
    font-size: 14px;
  `}
`;
