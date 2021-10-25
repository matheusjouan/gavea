import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeOfButton?: 'primary' | 'secondary';
  children: ReactNode;
}

export const Button = ({
  children,
  typeOfButton = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <S.Container typeOfButton={typeOfButton} {...rest}>
      {children}
    </S.Container>
  );
};
