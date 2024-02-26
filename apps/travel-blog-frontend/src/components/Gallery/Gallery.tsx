import { useCallback, useState } from 'react'
import Image from 'next/image'
import { Box, Inline, Overlay } from '@ui'
import { GalleryOverlay } from './GalleryOverlay'

interface Props {
  images: Array<{ src: string; alt?: string }>
}

export const Gallery: React.FC<Props> = ({ images }) => {
  const [open, setOpen] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)

  const handleOpen = useCallback((index: number) => {
    setSlideNumber(index)
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => setOpen(false), [])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <Box align="center">
      <Box paddingY="L">
        <Inline gap="S">
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                quality={50}
                className="image"
                onClick={() => handleOpen(index)}
                style={{ objectFit: 'cover' }}
              />
            )
          })}
        </Inline>
      </Box>

      <Overlay open={open} onClose={handleClose}>
        <GalleryOverlay
          imagesCount={images.length}
          slideNumber={slideNumber}
          currentImage={images[slideNumber]}
          setSlideNumber={setSlideNumber}
          handleClose={handleClose}
        />
      </Overlay>
    </Box>
  )
}
