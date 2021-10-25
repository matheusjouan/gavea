import styled, { css, keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(300px);
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
  animation: ${appearFromRight} 1s;
`;

export const WrapperTitle = styled.div``;

export const MessageTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 25px;
    font-weight: ${theme.font.semibold};
    line-height: 30px;
    color: ${theme.colors.black};
  `}
`;

export const Form = styled.form`
  margin-top: 22px;
  div {
    & + div {
      margin-top: 15px;
    }
  }

  button {
    margin-top: 30px;
  }
`;
