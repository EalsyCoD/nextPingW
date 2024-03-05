/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client';

import { useEffect, useState } from 'react';
import { getGameDataByUri } from '@/api/games/games';

import { type GamesActionProps } from '@/lib/types';
import { usePathname } from 'next/navigation';

export default function GamePage() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop();
  const [gameData, setGameData] = useState<GamesActionProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(slug);
        if (slug) {
          const data = await getGameDataByUri(slug);
          console.log(data);
          setGameData(data);
        }
      } catch (error) {
        console.error('Failed to fetch game data:', error);
      }
    }

    fetchData();
  }, [slug]);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Game Details</h1>
      <h1>{gameData.producer}</h1>
      {/* Здесь описываем что-то о игре */}
    </div>
  );
}
