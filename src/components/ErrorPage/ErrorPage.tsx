import './assets/styles.scss';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export default function ErrorPage(): JSX.Element {
  return (
    <div className='error-page'>
      <Header />
      <div className='error-page-content'>
        <span className='error-page-404'>404</span>
        <span className='error-page-text'>
          Oops... The page couldn't be found...
        </span>
        <Link to='/' className='error-page-homepage-btn'>
          BACK TO HOME PAGE
        </Link>
      </div>
    </div>
  );
}
