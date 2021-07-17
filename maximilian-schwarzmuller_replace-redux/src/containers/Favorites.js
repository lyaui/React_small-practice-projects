import React from 'react';
// import { useProductsValue } from '../context/products-context.js';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';
import { useStore } from '../hooks-store/store';

const Favorites = (props) => {
  // const { products } = useProductsValue();

  const [state] = useStore();

  const favoriteProducts = state.products.filter((p) => p.isFavorite);
  let content = <p className='placeholder'>Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className='products-list'>
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
