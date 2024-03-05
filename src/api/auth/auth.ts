'use server';

import customFetch from '../customFetch';

export async function registerUser(formData: {
  email: string;
  password: string;
}) {
  const res = await customFetch.post('register', formData);
  return res;
}

export async function loginUser(formData: { email: string; password: string }) {
  const res = await customFetch.post('login', formData);
  return res;
}

export async function logout() {
  const res = await customFetch.get('logout');
  return res;
}
