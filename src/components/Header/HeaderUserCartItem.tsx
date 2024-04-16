import { CartItem } from '../../store';

export default function HeaderUserCartItem({
  name,
  image,
  quantity,
  price,
}: CartItem): JSX.Element {
  return (
    <div className='header-user-cart-item'>
      <img className='header-user-cart-item-img' src={image?.url} alt={name} />
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
          />
          <input type='button' value='+' />
        </div>
      </div>
    </div>
  );
}
