import * as S from './styles';

interface FooterMessageProps {
  message: string;
  linkMessage: string;
  href: string;
}

export const FooterMessage = ({
  message,
  linkMessage,
  href,
}: FooterMessageProps) => {
  return (
    <S.Container>
      <S.Message>
        {message}
        <S.Link to={href}>{linkMessage}</S.Link>
      </S.Message>
    </S.Container>
  );
};
