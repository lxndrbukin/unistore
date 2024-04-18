import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, CartItem, changeQuantity, removeItem } from '../../store';
import { IoTrashOutline } from 'react-icons/io5';

export default function HeaderUserCartItem({
  id,
  name,
  image,
  quantity,
  price,
  permalink,
}: CartItem): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const handleQuantity = (e: MouseEvent<HTMLInputElement>): void => {
    const operator = (e.target as HTMLButtonElement).getAttribute('name')!;
    dispatch(
      changeQuantity({
        id,
        operator,
      })
    );
  };

  const handleRemoveItem = (): void => {
    dispatch(removeItem({ id }));
  };

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
        <div className='header-user-cart-item-name'>{name}</div>
        <div className='header-user-cart-item-quantity'>
          Quantity: {quantity}
        </div>
      </div>
      <div className='header-user-cart-item-settings'>
        <div className='header-user-cart-item-remove'>
          <i className='fas fa-times'></i>
        </div>
        <div className='header-user-cart-item-price'>
          £{price.raw * quantity}
        </div>
        <div className='header-user-cart-item-btns'>
          <input
            type='button'
            disabled={quantity === 1 ? true : false}
            value='-'
            name='decrement'
            onClick={handleQuantity}
          />
          <input
            type='button'
            name='increment'
            value='+'
            onClick={handleQuantity}
          />
        </div>
        <button onClick={handleRemoveItem}>
          <IoTrashOutline />
        </button>
      </div>
    </div>
  );
}
