/* eslint-disable import/no-extraneous-dependencies */
'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { makeStore, AppStore } from '../lib/store';
// import { register } from '../lib/features/auth/AuthSlice';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
