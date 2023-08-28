'use client';
import { FC } from 'react';
import styled, { css } from 'styled-components';

interface BaseProps {
  rounded?: boolean;
  size?: string;
  isHovered?: boolean;
  onClick?: (e: any) => void;
}
interface CountryIconProps extends BaseProps {
  code: string;
}

const Container = styled.span<BaseProps & { isInteractive: boolean }>`
  font-size: ${({ size }) => size};

  ${({ isHovered, isInteractive }) =>
    isInteractive &&
    isHovered &&
    css`
      transform: scale(1.2);
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 100%;
    `}
`;

export const CountryIcon: FC<CountryIconProps> = ({
  code,
  rounded = true,
  size = '30px',
  isHovered,
  onClick,
}) => {
  const isInteractive = isHovered !== undefined;

  return (
    <Container
      className={`fi fi-${code} fis`}
      rounded={rounded}
      size={size}
      isHovered={isHovered}
      isInteractive={isInteractive}
      onClick={onClick}
    />
  );
};
