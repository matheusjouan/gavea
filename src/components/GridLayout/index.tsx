import { ReactNode } from 'react';
import * as S from './styles';

interface GridLayoutProps {
  justifyContent?: string;
  children: ReactNode;
}

export const GridLayout = ({
  children,
  justifyContent = 'flex-start',
}: GridLayoutProps) => {
  return <S.Container justifyContent={justifyContent}>{children}</S.Container>;
};
