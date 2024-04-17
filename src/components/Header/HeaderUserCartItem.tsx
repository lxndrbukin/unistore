import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, CartItem, changeQuantity } from '../../store';

export default function HeaderUserCartItem({
  id,
  name,
  image,
  quantity,
  price,
  permalink,
}: CartItem): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e: MouseEvent<HTMLInputElement>): void => {
    const operator = (e.target as HTMLButtonElement).getAttribute('name')!;
    dispatch(
      changeQuantity({
        id,
        operator,
      })
    );
  };

  return (
    <div className="header-user-cart-item">
      <Link to={`/products/${permalink}`}>
        <img
          className="header-user-cart-item-img"
          src={image?.url}
          alt={name}
        />
      </Link>
      <div className="header-user-cart-item-info">
        <div className="header-user-cart-item-name">{name}</div>
        <div className="header-user-cart-item-quantity">
          Quantity: {quantity}
        </div>
      </div>
      <div className="header-user-cart-item-settings">
        <div className="header-user-cart-item-remove">
          <i className="fas fa-times"></i>
        </div>
        <div className="header-user-cart-item-price">
          £{price.raw * quantity}
        </div>
        <div className="header-user-cart-item-btns">
          <input
            type="button"
            disabled={quantity === 1 ? true : false}
            value="-"
            name="decrement"
            onClick={handleClick}
          />
          <input
            type="button"
            name="increment"
            value="+"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
