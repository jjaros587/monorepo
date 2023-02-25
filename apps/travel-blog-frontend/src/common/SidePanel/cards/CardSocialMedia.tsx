import { Inline } from '@ui';
import { SidePanelCard } from '../SidePanelCard';
import { IconSocialMedia } from '@icons';

export const CardSocialMedia: React.FC = () => {
  return (
    <SidePanelCard title="Social">
      <Inline align="space-between">
        <IconSocialMedia name="facebook" />
        <IconSocialMedia name="instagram" />
        <IconSocialMedia name="youtube" />
      </Inline>
    </SidePanelCard>
  );
};
