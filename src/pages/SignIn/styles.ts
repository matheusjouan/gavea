import styled, { css, keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;

  animation: ${appearFromLeft} 1s;
`;

export const WrapperTitle = styled.div``;

export const MessageTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 25px;
    font-weight: ${theme.font.semibold};
    line-height: 42px;
    color: ${theme.colors.orange};
  `}
`;

export const WelcomeTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 25px;
    font-weight: ${theme.font.bold};
    line-height: 42px;
    color: ${theme.colors.black};
  `}
`;

export const Form = styled.form`
  margin-top: 30px;
  div {
    & + div {
      margin-top: 15px;
    }
  }

  button {
    margin-top: 30px;
  }
`;

export const ErrorAuthMessage = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-top: 16px;
    font-size: 14px;
    font-weight: ${theme.font.semibold};
    text-align: center;
    color: ${theme.colors.red};
  `}
`;
