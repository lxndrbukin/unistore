import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, CartItem, changeQuantity, removeItem } from '../../store';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function HeaderUserCartItem({
  id,
  name,
  image,
  quantity,
  price,
  permalink,
}: CartItem): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const handleQuantity = (e: ChangeEvent<HTMLSelectElement>): void => {
    const prevQuantity = quantity;
    dispatch(
      changeQuantity({
        id,
        prevQuantity,
        newQuantity: Number(e.target.value),
      })
    );
  };

  const handleRemoveItem = (): void => {
    dispatch(removeItem({ id }));
  };

  const select = (
    <select onChange={handleQuantity} defaultValue={quantity}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  );

  return (
    <div className='header-user-cart-item'>
      <Link
        style={{ backgroundImage: image?.url }}
        to={`/products/${permalink}`}
      >
        <img
          className='header-user-cart-item-img'
          src={image?.url}
          alt={name}
        />
      </Link>
      <div className='header-user-cart-item-info'>
        <Link
          className='header-user-cart-item-name'
          to={`/products/${permalink}`}
        >
          {name}
        </Link>
      </div>
      <div className='header-user-cart-item-settings'>
        <div className='header-user-cart-item-price'>
          £{price.raw * quantity}
        </div>
        <div className='header-user-cart-item-operations'>
          {select}
          <button onClick={handleRemoveItem}>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  );
}
