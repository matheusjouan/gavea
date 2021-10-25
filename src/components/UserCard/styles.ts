import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 80px;
    padding: 15px;
    background-color: ${theme.colors.white};
    box-shadow: rgb(1 66 106 / 20%) 0px 12px 35px;
    border-radius: 7px;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Content = styled.div`
  display: flex;
`;

export const ButtonSignOut = styled.button`
  border: 0;
  background: transparent;
`;

export const WrapperUserInfo = styled.div`
  margin-left: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AvatarUser = styled.div`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 3.6px 8.1px rgba(45, 56, 83, 0.2);
    background-color: ${theme.colors.blueDark};
    color: ${theme.colors.white};
    text-transform: capitalize;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const UserName = styled.h1`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: ${theme.font.semibold};
    line-height: 20px;
    color: ${theme.colors.black};
    text-transform: capitalize;
  `}
`;

export const CompanyName = styled.span`
  ${({ theme }) => css`
    margin-top: 5px;
    font-size: 14px;
    line-height: 15px;
    color: ${theme.colors.grey};
  `}
`;
