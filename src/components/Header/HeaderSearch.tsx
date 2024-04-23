import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export default function HeaderSearch(): JSX.Element {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    navigate({
      pathname: '/products',
      search: `?search=${target.search.value}`,
    });
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
