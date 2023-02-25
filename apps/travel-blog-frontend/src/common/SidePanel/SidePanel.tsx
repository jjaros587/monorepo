'use client';

import { Stack } from '@ui';
import { CardInstagramFeed } from './cards/CardInstagramFeed';
import { CardSocialMedia } from './cards/CardSocialMedia';

export const SidePanel = () => {
  return (
    <Stack gap="M">
      <CardSocialMedia />
      <CardInstagramFeed />
    </Stack>
  );
};
