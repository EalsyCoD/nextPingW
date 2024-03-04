/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/return-await */
'use server';

const username = 'testzone';
const password = 'gromozeka';
const authString = `${username}:${password}`;
const encodedAuthString = btoa(authString);

export async function registerUser(formData: any) {
  console.log(formData);
  const res = await fetch('https://dev.pingwin.fun/server/register', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
      'Content-Type': 'application/x-www-form-urlencoded', // Добавляем Content-Type
      accept: 'application/json', // Добавляем accept
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error('Failed to register user');
  }

  return res.json();
}

export async function loginUser(formData: any) {
  console.log(formData);
  const res = await fetch('https://dev.pingwin.fun/server/login', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
      'Content-Type': 'application/x-www-form-urlencoded', // Добавляем Content-Type
      accept: 'application/json', // Добавляем accept
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error('Failed to register user');
  }

  return res.json();
}

export async function logout() {
  const res = await fetch('https://dev.pingwin.fun/server/logout', {
    method: 'GET',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
      accept: '*/*',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to register user');
  }
  console.log(res);
  return res.json();
}
