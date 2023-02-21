import * as S from './styled';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  disabled?: boolean;
  icon?: any;
  variant?: 'primary' | 'secondary' | 'link';
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  primary,
  type = 'button',
  variant = 'secondary',
  children,
  ...rest
}) => {
  const isPrimary = variant === 'primary' || primary;

  return (
    <S.StyledButton
      type={type}
      variant={isPrimary ? 'primary' : variant}
      {...rest}
    >
      {children}
    </S.StyledButton>
  );
};
