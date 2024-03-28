import { FiSearch } from 'react-icons/fi';

export default function HeaderSearch(): JSX.Element {
  return (
    <form className='header-search-form'>
      <input type='text' name='search' placeholder='Search Product' />
      <button>
        <FiSearch />
      </button>
    </form>
  );
}
