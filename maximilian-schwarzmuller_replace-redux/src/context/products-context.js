import React, { createContext, useState, useContext } from 'react';

const DEFAULT_PRODUCTS = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false,
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false,
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false,
  },
];

const ProductsContext = createContext({
  products: [],
  toggleFav: () => {},
});

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(DEFAULT_PRODUCTS);
  const toggleFavor = (id) => {
    const productId = productList.findIndex((product) => product.id === id);
    const newProductList = [...productList];
    newProductList[productId].isFavorite = !newProductList[productId].isFavorite;
    setProductList(newProductList);
  };

  return (
    <ProductsContext.Provider value={{ products: productList, toggleFav: toggleFavor }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsValue = () => useContext(ProductsContext);

export default ProductProvider;
