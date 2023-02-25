import { ImgHTMLAttributes, useCallback, useState } from 'react';
import Image from 'next/image';
import { Box, Overlay } from '@ui';
import { getStrapiURL } from 'lib/api';
import styled from '@theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Container = styled(Box)`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: fill;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    cursor: pointer;
  }
`;

const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const MarkdownImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
}) => {
  const [open, setOpen] = useState(false);
  const url = `${getStrapiURL(src)}`;

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <Box align="center">
      <Container paddingX="L">
        <Image
          src={url}
          alt={alt}
          fill={true}
          quality={1}
          className="image"
          onClick={handleOpen}
        />
      </Container>

      <Overlay open={open} onClose={handleClose}>
        <Container alignY="center">
          <Image
            src={url}
            alt={alt}
            fill={true}
            quality={100}
            className="image"
            onClick={handleClose}
          />
        </Container>
        <CloseButton icon={faCircleXmark} onClick={handleClose} />
      </Overlay>
    </Box>
  );
};
