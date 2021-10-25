import logoImg from '../../assets/logo.svg';
import * as S from './styles';

interface LogoProps {
  width: number;
  height: number;
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <S.Container
      width={width}
      height={height}
      src={logoImg}
      alt="Imagem da logo da Gavea"
    />
  );
};
