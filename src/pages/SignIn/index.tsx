import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../hooks/useAuth';

import { GridLayout } from '../../components/GridLayout';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FooterMessage } from '../../components/FooterMessage';

import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

import * as S from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
});

const SignIn = () => {
  const { signIn, errorAuth } = useAuth();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn = async (values: SignInFormData) => {
    signIn(values.email, values.password);
  };

  return (
    <S.Container>
      <GridLayout justifyContent="center">
        <S.WrapperTitle>
          <S.MessageTitle>Olá!</S.MessageTitle>
          <S.WelcomeTitle>Seja bem-vindo.</S.WelcomeTitle>
        </S.WrapperTitle>

        <S.Form onSubmit={handleSubmit(handleSignIn)}>
          <Input
            type="email"
            iconLeft={MdOutlineMail}
            placeholder="Email"
            {...register('email')}
            error={errors.email}
          />

          <Input
            type="password"
            placeholder="Senha"
            iconLeft={RiLockPasswordLine}
            iconRightPassword={true}
            {...register('password')}
            error={errors.password}
          />

          {!!errorAuth && <S.ErrorAuthMessage>{errorAuth}</S.ErrorAuthMessage>}

          <Button type="submit" typeOfButton="primary">
            Entrar
          </Button>
        </S.Form>
      </GridLayout>

      <FooterMessage
        message="Não tem uma conta?"
        linkMessage="Criar conta"
        href="/signup"
      />
    </S.Container>
  );
};

export default SignIn;
