/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable prettier/prettier */
'use server';

import { registerUser } from '@/api/auth/auth';
import { redirect } from 'next/navigation';

export async function authenticate(formData: FormData) {
  if (formData) {
    await registerUser(formData);
    redirect('/main');
  }
}
