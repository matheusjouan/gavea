import { useAuth } from '../../hooks/useAuth';
import { FiLogOut } from 'react-icons/fi';
import * as S from './styles';
import { useMemo } from 'react';

export const UserCard = () => {
  const { user, signOut } = useAuth();

  const formattedUserAvatarName = useMemo(() => {
    return user.substr(0, 2);
  }, [user]);

  return (
    <S.Container>
      <S.Content>
        <S.AvatarUser>{formattedUserAvatarName}</S.AvatarUser>

        <S.WrapperUserInfo>
          <S.UserName>Olá, {user}</S.UserName>
          <S.CompanyName>Gavea Marketplace</S.CompanyName>
        </S.WrapperUserInfo>
      </S.Content>

      <S.ButtonSignOut onClick={signOut}>
        <FiLogOut size={20} color="#748C94" />
      </S.ButtonSignOut>
    </S.Container>
  );
};
