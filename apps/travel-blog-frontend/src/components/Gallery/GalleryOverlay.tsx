import { ReactFCWithChildren } from '@ui'
import { useDocumentEventListener } from '@hooks'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import { CloseButton, PrevButton, NextButton, Container } from './styled'

interface Props {
  imagesCount: number
  slideNumber: number
  currentImage: { src: string; alt?: string }
  setSlideNumber: (index: number) => void
  handleClose: () => void
}

export const GalleryOverlay: ReactFCWithChildren<Props> = ({
  imagesCount,
  slideNumber,
  currentImage,
  setSlideNumber,
  handleClose,
}) => {
  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(imagesCount - 1) : setSlideNumber(slideNumber - 1)
  }

  const nextSlide = () => {
    const nextSlideNumber = slideNumber + 1
    nextSlideNumber === imagesCount ? setSlideNumber(0) : setSlideNumber(nextSlideNumber)
  }

  const handleKeyboardEvent = (e: KeyboardEvent) => {
    e.stopPropagation()
    switch (e.key) {
      case 'ArrowLeft':
        prevSlide()
        break
      case 'ArrowRight':
        nextSlide()
        break
      default:
        return
    }
  }

  useDocumentEventListener('keyup', handleKeyboardEvent)

  return (
    <>
      <Container alignY="center" align="center">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill={true}
          quality={100}
          className="image"
          onClick={handleClose}
        />
      </Container>
      <CloseButton icon={faCircleXmark} onClick={handleClose} />
      {imagesCount > 1 && (
        <>
          <PrevButton
            icon={faCircleChevronLeft}
            onClick={(e) => {
              e.stopPropagation()
              prevSlide()
            }}
          />
          <NextButton
            icon={faCircleChevronRight}
            onClick={(e) => {
              e.stopPropagation()
              nextSlide()
            }}
          />
        </>
      )}
    </>
  )
}
