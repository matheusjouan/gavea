/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface PriceProps {
  balance: string;
}

interface ContainerProps {
  balance: string;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, balance }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 9px 5px;

    @media (min-width: 360px) {
      justify-content: space-between;
      padding: 9px 10px;
    }

    border: 1px solid ${theme.colors.lightBlue};
    border-radius: 4px;
    box-shadow: 0px 17px 60px rgba(45, 76, 113, 0.07),
      0px 3.8px 13.4px rgba(45, 76, 113, 0.0417),
      0px 1.13px 3.99px rgba(45, 76, 113, 0.0283);

    font-size: 15px;
    font-family: ${theme.font.family.karla};
    color: ${theme.colors.darkGrey};

    &:last-child {
      margin-bottom: 20px;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 5px;
      height: 50px;
      background-color: ${balance === 'positive'
      ? theme.colors.green
      : theme.colors.red};
      border-radius: 4px 0px 0px 4px;
    }

    & + div {
      margin-top: 8px;
    }
  `}
`;

export const PartName = styled.span`
  width: 74px;
`;

export const Date = styled.span`
  width: 43px;
`;

export const Weight = styled.span`
  width: 45px;
`;

export const Price = styled.span<PriceProps>`
  ${({ theme, balance }) => css`
    width: 50px;
    color: ${balance === 'positive' ? theme.colors.green : theme.colors.red};
  `}
`;
