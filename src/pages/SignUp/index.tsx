import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../hooks/useAuth';

import { GridLayout } from '../../components/GridLayout';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FooterMessage } from '../../components/FooterMessage';

import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine, RiUser3Line } from 'react-icons/ri';
import * as S from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

const SignUp = () => {
  const { signUp } = useAuth();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signUpFormSchema),
  });

  const { errors } = formState;

  const handleSignUp = async (values: SignUpFormData) => {
    signUp(values.name, values.email, values.password);
  };

  return (
    <S.Container>
      <GridLayout justifyContent="center">
        <S.WrapperTitle>
          <S.MessageTitle>Criar Conta</S.MessageTitle>
        </S.WrapperTitle>

        <S.Form onSubmit={handleSubmit(handleSignUp)}>
          <Input
            type="text"
            iconLeft={RiUser3Line}
            placeholder="Nome completo"
            {...register('name')}
            error={errors.name}
          />

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

          <Input
            type="password"
            placeholder="Confirma Senha"
            iconLeft={RiLockPasswordLine}
            iconRightPassword={true}
            {...register('confirmPassword')}
            error={errors.confirmPassword}
          />

          <Button type="submit" typeOfButton="primary">
            Cadastrar
          </Button>
        </S.Form>
      </GridLayout>

      <FooterMessage
        message="Já tem uma conta?"
        linkMessage="Faça o login"
        href="/signin"
      />
    </S.Container>
  );
};

export default SignUp;
