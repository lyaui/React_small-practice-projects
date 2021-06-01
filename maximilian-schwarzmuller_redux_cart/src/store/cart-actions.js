import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice.js';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch('https://node-practice-3b49e.firebaseio.com/cart.json');
      if (!res.ok) throw new Error('Oops!');
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }),
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Fertching cart data failed!',
        }),
      );
    }
  };
};

// custom action creator
export const sendCartData = (cart) => {
  // return 的是一個 function
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    );
    const sendCartData = async () => {
      const res = await fetch('https://node-practice-3b49e.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!res.ok) throw new Error('Oops!');
    };

    try {
      await sendCartData();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data! successfully!',
        }),
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed!',
        }),
      );
    }
  };
};
