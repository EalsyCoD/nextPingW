/* eslint-disable @typescript-eslint/consistent-type-imports */
'use client';

import { GamesActionProps } from '@/lib/types';

export const Games = (games: GamesActionProps) => {
  return <div>{games.title}</div>;
};
