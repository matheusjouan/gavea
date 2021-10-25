import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';

import { FieldError } from 'react-hook-form';

import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  iconLeft?: React.ComponentType<IconBaseProps>;
  iconRightPassword?: boolean;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    type,
    iconLeft: IconLeft,
    iconRightPassword = false,
    error = null,
    ...rest
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <S.Container isFocused={isFocused}>
      <S.Input
        placeholder="E-mail"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={
          type === 'password' ? (isShowPassword ? 'text' : 'password') : 'text'
        }
        ref={ref}
        {...rest}
      />
      {IconLeft && <IconLeft size={18} className="iconLeft" />}
      {iconRightPassword && (
        <div onClick={toggleShowPassword}>
          {isShowPassword ? (
            <FiEyeOff size={18} className="iconRight" />
          ) : (
            <FiEye size={18} className="iconRight" />
          )}
        </div>
      )}
      {!!error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
