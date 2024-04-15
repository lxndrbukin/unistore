import { Product } from '@chec/commerce.js/types/product';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, addToCart } from '../../store';
import { PiShoppingCart } from 'react-icons/pi';

export default function ProductsGridItem(props: Product): JSX.Element {
  const { permalink, price, name, image } = props;
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(addToCart(props));
  };

  return (
    <div className="products-grid-item">
      <Link to={`/products/${permalink}`}>
        <img alt={name} src={image?.url} />
      </Link>
      <div className="products-grid-item-line">
        <Link to={`/products/${permalink}`}>
          <span className="products-grid-item-name">{name}</span>
        </Link>
      </div>
      <div className="products-grid-item-line">
        <span className="products-grid-item-price">
          {price.formatted_with_symbol}
        </span>
        <button onClick={handleClick}>
          <PiShoppingCart />
        </button>
      </div>
    </div>
  );
}
