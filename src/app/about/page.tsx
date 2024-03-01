import { getData } from '../../api/data';
import { Title } from './styles';

export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <Title>Hello, About!</Title>
      <h2>{data?.map((item: any) => item.id)}</h2>
    </>
  );
}
