import { authApi, encodedAuthString } from '../../config/default';

interface FetchOptions {
  method: string;
  headers?: Record<string, string>;
  body?: any;
}

export const customFetch = async <T>(
  url: string,
  options: FetchOptions & { headers?: Record<string, string> },
): Promise<T> => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json() as T;
};

customFetch.get = async <T>(
  url: string,
  params?: Record<string, string>,
): Promise<T> => {
  const queryParams = params ? new URLSearchParams(params).toString() : '';
  const options: FetchOptions = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
      accept: 'application/json',
    },
  };
  return customFetch(`${authApi.baseUrl}${url}?${queryParams}`, options);
};

customFetch.post = async <T>(
  url: string,
  data: T,
  options?: FetchOptions & { headers?: Record<string, string> },
) => {
  const defaultOptions: FetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      accept: 'application/json',
    },
    body: JSON.stringify(data),
  };
  const requestOptions = { ...defaultOptions, ...options };

  return customFetch(`${authApi.baseUrl}${url}`, requestOptions);
};

customFetch.put = async <T>(url: string, data: T): Promise<T> => {
  const options: FetchOptions = {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      accept: 'application/json',
    },
    body: JSON.stringify(data),
  };
  return customFetch(`${authApi.baseUrl}${url}`, options);
};

customFetch.patch = async <T>(url: string, data: T): Promise<T> => {
  const options: FetchOptions = {
    method: 'PATCH',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      accept: 'application/json',
    },
    body: JSON.stringify(data),
  };
  return customFetch(`${authApi.baseUrl}${url}`, options);
};

customFetch.remove = async <T>(url: string): Promise<T> => {
  const options: FetchOptions = {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${encodedAuthString}`,
    },
  };
  return customFetch(`${authApi.baseUrl}${url}`, options);
};

export default customFetch;
