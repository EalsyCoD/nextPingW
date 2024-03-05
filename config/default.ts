export const mockAuth = {
  username: 'testzone',
  password: 'gromozeka',
} as const;

const authString = `${mockAuth.username}:${mockAuth.password}`;
export const encodedAuthString = btoa(authString);

export const authApi = {
  baseUrl: 'https://dev.pingwin.fun/server/',
  login: {
    path: 'login',
  },
  registration: {
    path: 'register',
  },
  logout: {
    path: 'logout',
  },
} as const;
