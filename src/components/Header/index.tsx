import { Logo } from '../Logo';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <Logo width={99} height={46} />
    </S.Container>
  );
};
