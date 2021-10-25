import { useHistory } from 'react-router-dom';
import { GridLayout } from '../GridLayout';
import { Button } from '../Button';
import { Logo } from '../Logo';

import * as S from './styles';

interface WelcomeAppProps {
  welcomeMessage: string;
  buttonPrimaryText: string;
  buttonSecondaryText: string;
}

const WelcomeApp = ({
  welcomeMessage,
  buttonPrimaryText,
  buttonSecondaryText,
}: WelcomeAppProps) => {
  const history = useHistory();

  return (
    <S.Container>
      <GridLayout justifyContent="space-between">
        <Logo width={118} height={55} />

        <S.Content>
          <S.Title>{welcomeMessage}</S.Title>

          <S.WrapperButtons>
            <Button onClick={() => history.push('/signin')}>
              {buttonPrimaryText}
            </Button>
            <Button
              typeOfButton="secondary"
              onClick={() => history.push('/signup')}
            >
              {buttonSecondaryText}
            </Button>
          </S.WrapperButtons>
        </S.Content>
      </GridLayout>
    </S.Container>
  );
};

export default WelcomeApp;
