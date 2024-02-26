import { Wallpaper } from './styled'

export const HomePageWallpapers = () => {
  const assets = ['./wallpapers/1.jpg', './wallpapers/2.jpg', './wallpapers/3.jpg']

  const presentationTime = 3
  const transitionTime = 2
  const animationTime = presentationTime + transitionTime

  const itemsCount = assets.length
  const totalAnimationDuration = (presentationTime + transitionTime) * itemsCount

  return (
    <>
      {assets.map((item, index) => {
        return (
          <Wallpaper
            key={index}
            src={item}
            presentationTime={presentationTime}
            transitionTime={transitionTime}
            index={index}
            animationTime={animationTime}
            totalAnimationDuration={totalAnimationDuration}
          />
        )
      })}
    </>
  )
}
