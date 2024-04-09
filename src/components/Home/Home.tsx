import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Home(): JSX.Element {
  const { search } = useSelector((state: RootState) => state.catalog.filter);

  if (search) {
    return (
      <Navigate
        replace
        to={{ pathname: '/products', search: `search=${search}` }}
      />
    );
  }

  return (
    <div className="home">
      <section className="home-top-categories"></section>
      <section className="home-top-categories"></section>
      <section className="home-top-categories"></section>
    </div>
  );
}
