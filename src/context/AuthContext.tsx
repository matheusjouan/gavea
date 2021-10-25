import { createContext, ReactNode, useState } from 'react';
import { auth } from '../services/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { useHistory } from 'react-router-dom';

interface AuthContextData {
  user: string;
  errorAuth: string;
  signIn(email: string, password: string): Promise<void>;
  signUp(name: string, email: string, password: string): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(() => {
    const userName = localStorage.getItem('@Gavea:userName');

    if (userName) {
      return JSON.parse(userName);
    }

    return '';
  });
  const [errorAuth, setErrorAuth] = useState('');
  const history = useHistory();

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const userCurrent = auth.currentUser;

      if (userCurrent) {
        if (userCurrent.displayName !== null) {
          setUser(userCurrent.displayName.split(' ')[0]);
          localStorage.setItem(
            '@Gavea:userName',
            JSON.stringify(userCurrent.displayName),
          );
        }
      }
      history.push('/dashboard');
    } catch (err) {
      console.log('ERRO AO LOGAR');
      setErrorAuth('Email e/ou senha inválidos');
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const userCurrent = auth.currentUser;

      if (userCurrent) {
        updateProfile(userCurrent, {
          displayName: name,
        });
      }

      history.push('/signin');
    } catch (err) {
      console.log('ERRO AO CADASTRAR');
    }
  };

  const signOut = () => {
    localStorage.clear();
    setUser('');
    history.push('/');
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, signOut, user, errorAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
