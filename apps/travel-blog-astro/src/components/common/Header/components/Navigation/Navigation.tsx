import { MainNavigationItem } from './MainNavigationItem/MainNavigationItem';
import { Inline } from '@ui';

export const Navigation = () => {
  return (
    <nav style={{ overflow: 'hidden' }}>
      <Inline>
        <MainNavigationItem href={'/'} label="Home" />
        <MainNavigationItem href={'/blog'} label="Blog" />
        <MainNavigationItem
          href={'/countries'}
          label="Countries"
          subNavigation={
            <Inline>
              <div>bbb bbb bbb bbb bbb bbb</div>
              <div>bbb bbb bbb bbb bbb bbb</div>
              <div>bbb bbb bbb bbb bbb bbb</div>
              <div>bbb bbb bbb bbb bbb bbb</div>
              <div>bbb bbb bbb bbb bbb bbb</div>
              <div>bbb bbb bbb bbb bbb bbb</div>
            </Inline>
          }
        />
      </Inline>
    </nav>
  );
};
