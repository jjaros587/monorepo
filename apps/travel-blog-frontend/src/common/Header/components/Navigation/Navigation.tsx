import { MainNavigationItem } from './MainNavigationItem/MainNavigationItem';
import { Inline } from '@ui';

export const Navigation = () => {
  return (
    <nav>
      <Inline>
        <MainNavigationItem href={'/'} label="Home" />
        <MainNavigationItem href={'/blog'} label="Blog" />
        <MainNavigationItem
          href={'/countries'}
          label="Countries"
          subNavigation={<>bbb</>}
        />
      </Inline>
    </nav>
  );
};
