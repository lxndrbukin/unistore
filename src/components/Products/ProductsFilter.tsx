import ProductsFilterPriceInput from './ProductsFilterPriceInput';

export default function ProductsFilter(): JSX.Element {
  return (
    <div className='products-filter'>
      <h3 className='products-filter-header'>Filter</h3>
      <div className='products-filter-sections'>
        <div className='products-filter-categories'>
          <h5 className='products-filter-sub-header'>Categories</h5>
          <div className='products-filter-categories-checkboxes'>
            {/* <CatalogFilterCheckbox name='men' label="Men's Fashion" />
            <CatalogFilterCheckbox name='women' label="Women's Fashion" /> */}
          </div>
        </div>
        <div className='products-filter-prices'>
          <h5 className='products-filter-sub-header'>Price</h5>
          <div className='products-filter-prices-inputs'>
            <ProductsFilterPriceInput currency='£' name='min' />
            <ProductsFilterPriceInput currency='£' name='max' />
          </div>
        </div>
      </div>
    </div>
  );
}
