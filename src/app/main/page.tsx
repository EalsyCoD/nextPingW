import { getData } from '@/api/games/games';
import { Games } from '@/components/Games/Games';
import Link from 'next/link';

import { type GamesActionProps } from '@/lib/types';
import { logoutAuth } from '@/lib/actions';

export default async function Page() {
  const games = await getData();

  return (
    <>
      <div>Main Page</div>
      <form action={logoutAuth}>
        <button>Logout</button>
      </form>
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
