/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use server';
const username = 'testzone';
const password = 'gromozeka';
const authString = `${username}:${password}`;
const encodedAuthString = btoa(authString);

export async function getData() {
  const res = await fetch('https://dev.pingwin.fun/server/getGames', {
    method: 'GET',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
      accept: 'application/json', // Добавляем accept
    },
  });

  if (!res.ok) {
    throw new Error('Failed to register user');
  }

  // eslint-disable-next-line @typescript-eslint/return-await
  return res.json();
}

export async function getGameDataByUri(queryParams: string) {
  // Создаем объект URLSearchParams из переданных query параметров
  const searchParams = new URLSearchParams();
  searchParams.append('game', queryParams); // Добавляем параметр 'game'

  // Создаем URL с добавленными query параметрами
  const url = `https://dev.pingwin.fun/server/getGameData?${searchParams.toString()}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
      accept: 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch game data');
  }

  return res.json();
}
