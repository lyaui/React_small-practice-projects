import { initStore } from './store';

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

const configureStore = () => {
  const actions = {
    // productId 是 payload
    TOGGLE_FAV: (curState, productId) => {
      const productIndex = curState.products.findIndex((product) => product.id === productId);
      const newProductList = [...curState.products];
      newProductList[productIndex].isFavorite = !newProductList[productIndex].isFavorite;
      return { products: newProductList };
    },
  };
  initStore(actions, { products: DEFAULT_PRODUCTS });
};

export default configureStore;
