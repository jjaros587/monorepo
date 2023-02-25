import styled from '@theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@ui';
import Image from 'next/image';

export const Container = styled(Box)`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    position: relative !important;
    height: unset !important;
    cursor: pointer;
  }
`;

export const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const PrevButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 40px;
`;

export const NextButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 40px;
`;
