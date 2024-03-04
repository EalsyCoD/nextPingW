/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { getData } from '@/api/games/games';
import { Games } from '@/components/Games/Games';
import Link from 'next/link';

import { type GamesActionProps } from '@/lib/types';

export default async function Page() {
  const games = await getData();
  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     console.log('User logged out successfully');
  //   } catch (error) {
  //     console.error('Failed to log out:', error);
  //   }
  // };

  return (
    <>
      <div>Main Page</div>
      {/* <button onClick={handleLogout}>Logout</button>  // Просто вынести кнопку в клиентский компонент */}
      {games ? (
        games?.games?.map((item: GamesActionProps) => (
          <div key={item.id}>
            <Link href={`games/${item.uri}`}>
              <Games {...item} />
            </Link>
          </div>
        ))
      ) : (
        <div>No games</div>
      )}
    </>
  );
}
