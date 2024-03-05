'use client';

import { type GamesActionProps } from '@/lib/types';

export const Games = (games: GamesActionProps) => {
  return <div>{games.title}</div>;
};
