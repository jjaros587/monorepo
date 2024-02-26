import styled, { keyframes, css } from '@theme'

export const Wallpaper = styled.img<{
  presentationTime: number
  transitionTime: number
  animationTime: number
  totalAnimationDuration: number
  index: number
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  ${(p) =>
    imageTransitionAnimation(
      p.presentationTime,
      p.transitionTime,
      p.totalAnimationDuration,
      p.animationTime * p.index,
    )}
`

function imageTransitionAnimation(
  presentationTime: number,
  transitionTime: number,
  totalAnimationDuration: number,
  animationDelay: number,
) {
  const second = (presentationTime / totalAnimationDuration) * 100
  const third = ((presentationTime + transitionTime) / totalAnimationDuration) * 100
  const fourth = 100 - (transitionTime / totalAnimationDuration) * 100

  const fade = keyframes`
  0% {
    opacity: 1;
  }
  ${second}% {
    opacity: 1;
  }
  ${third}% {
    opacity: 0;
  }
  ${fourth}% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

  return css`
    animation: ${fade} ${totalAnimationDuration}s 20s infinite;
    animation-delay: ${animationDelay}s;
  `
}
