import { FormEvent } from 'react';
import commerce from '../../lib/commerce';

export default function Auth(): JSX.Element {
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    commerce.customer
      .login(target.email.value, 'http://localhost:3000/login/callback')
      .then((token: any) => console.log(token));
  };

  return (
    <div className='auth'>
      <form onSubmit={onSubmit}>
        <input name='email' placeholder='Email' />
        <button>Submit</button>
      </form>
    </div>
  );
}
