import styled, { css, keyframes } from 'styled-components';
import logoImg from '../../assets/backgroundImg.jpg';

const appearFromDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(700px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  padding-top: 21px;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const Content = styled.div`
  padding-bottom: 30px;
  animation: ${appearFromDown} 1s;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 36px;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    line-height: 44px;
  `}
`;

export const WrapperButtons = styled.div`
  margin-top: 45px;

  button {
    & + button {
      margin-top: 15px;
    }
  }
`;
