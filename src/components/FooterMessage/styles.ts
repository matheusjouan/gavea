import styled, { css } from 'styled-components';
import { Link as LinkRouterDom } from 'react-router-dom';

export const Container = styled.footer`
  text-align: center;
`;

export const Message = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.karla};
    font-size: 15px;
    line-height: 16px;
    color: ${theme.colors.grey};
  `}
`;

export const Link = styled(LinkRouterDom)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.karla};
    font-size: 15px;
    font-weight: ${theme.font.bold};
    line-height: 16px;
    color: ${theme.colors.orange};
    margin-left: 5px;
  `}
`;
