'use client';

import { HomepageEntity } from '@graphql';
import { getStrapiMediaArrayItem } from 'lib/media';
import { Wallpaper } from './styled';

interface Props {
  homepage: HomepageEntity;
}

export const HomePageWallpapers = ({ homepage }: Props) => {
  const presentationTime: number = 3;
  const transitionTime: number = 2;
  const animationTime: number = presentationTime + transitionTime;

  const itemsCount = homepage.attributes.wallpapers.data.length;
  const totalAnimationDuration: number =
    (presentationTime + transitionTime) * itemsCount;

  return (
    <>
      {homepage.attributes.wallpapers.data.map((item, index) => {
        return (
          <Wallpaper
            src={getStrapiMediaArrayItem(item)}
            presentationTime={presentationTime}
            transitionTime={transitionTime}
            index={index}
            animationTime={animationTime}
            totalAnimationDuration={totalAnimationDuration}
          />
        );
      })}
    </>
  );
};
