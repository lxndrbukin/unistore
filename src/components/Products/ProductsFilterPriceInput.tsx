import { ChangeEvent, useState, useEffect } from 'react';
import { ProductsFilterPriceInputProps } from './types';
import { useDispatch } from 'react-redux';
import { AppDispatch, setPrice } from '../../store';

export default function ProductsFilterPriceInput({
  name,
  currency,
}: ProductsFilterPriceInputProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState<number | undefined>(undefined);
  useEffect(() => {
    dispatch(setPrice({ [name]: value }));
  }, [value, dispatch]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return setValue(undefined);
    setValue(parseInt(e.target.value));
  };
  return (
    <div className='products-filter-prices-input-wrapper'>
      <span>{currency}</span>
      <input min={0} onChange={onChange} placeholder={name} name={name} />
    </div>
  );
}
