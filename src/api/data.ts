export async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: 'no-store',
  });
  console.log(res);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
}
