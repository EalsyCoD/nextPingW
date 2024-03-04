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
