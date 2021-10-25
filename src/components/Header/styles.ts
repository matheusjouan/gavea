import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    height: 150px;
    padding-top: 25px;
    background-color: ${theme.colors.blue};
    text-align: center;
  `}
`;
