import { useState, useCallback } from 'react';

const useShoppingCart = () => {
  const [shirtsInCart, setShirtsInCart] = useState([]);

  const addToCart = useCallback(
    (shirtToAdd) => {
      const updatedShirtsList = [...shirtsInCart];

      const index = updatedShirtsList.findIndex((item) => {
        return shirtToAdd.id === item.id;
      });

      if (index !== -1) {
        updatedShirtsList[index].quantity += 1;
        updatedShirtsList[index].subtotal =
          updatedShirtsList[index].quantity * updatedShirtsList[index].price;
      } else {
        updatedShirtsList.push({ ...shirtToAdd, quantity: 1, subtotal: shirtToAdd.price });
      }

      setShirtsInCart(updatedShirtsList);
    },
    [shirtsInCart],
  );

  const removeFromCart = useCallback(
    (shirtToRemove) => {
      const updatedShirtsList = [...shirtsInCart];

      const index = updatedShirtsList.findIndex((item) => {
        return shirtToRemove.id === item.id;
      });

      updatedShirtsList.splice(index, 1);
      setShirtsInCart(updatedShirtsList);
    },
    [shirtsInCart],
  );

  const emptyCart = useCallback(() => {
    setShirtsInCart([]);
  }, []);

  return {
    shirtsInCart,
    addToCart,
    removeFromCart,
    emptyCart,
    setShirtsInCart,
  };
};

export default useShoppingCart;
