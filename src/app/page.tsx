/* eslint-disable @typescript-eslint/no-misused-promises */
import { authenticate } from '@/lib/actions';

export default function LoginPage() {
  return (
    <form action={authenticate}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
