import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, setSearch } from '../../store';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export default function HeaderSearch(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    dispatch(setSearch(target.search.value));
    navigate({ pathname: '/products' });
  };

  return (
    <form onSubmit={handleSubmit} className="header-search-form">
      <input type="text" name="search" placeholder="Search Product" />
      <button>
        <FiSearch size={18} />
      </button>
    </form>
  );
}
