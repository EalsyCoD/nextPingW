/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { getData } from '@/api/games/games';
import { Games } from '@/components/Games/Games';

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
      {/* <button onClick={handleLogout}>Logout</button>  // Вынести в клиентский компонент! */}
      {games ? (
        games?.games?.map((item: GamesActionProps) => (
          <>
            <Games {...item} />
          </>
        ))
      ) : (
        <div>No games</div>
      )}
    </>
  );
}
