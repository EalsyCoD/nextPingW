'use server';

import { authApi } from '../../../config/default';
import customFetch from '../customFetch';

export async function registerUser(formData: {
  email: string;
  password: string;
}) {
  const res = await customFetch.post(authApi.registration.path, formData);
  return res;
}

export async function loginUser(formData: { email: string; password: string }) {
  const res = await customFetch.post(authApi.login.path, formData);
  return res;
}

export async function logout() {
  const res = await customFetch.get(authApi.logout.path);
  return res;
}
