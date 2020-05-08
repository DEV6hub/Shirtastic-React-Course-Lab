import { useState, useCallback } from 'react';

const useShoppingCart = () => {
  const [shirtsInCart, setShirtsInCart] = useState([]);

  const addToCart = useCallback(
    (shirtToAdd) => {
      console.log('Add to Cart');
      // Create a temp working array from cart contents
      const updatedShirtsList = [...shirtsInCart];
      const index = updatedShirtsList.findIndex((item) => {
        return shirtToAdd.id === item.id;
      });
      if (index !== -1) {
        // If shirt exists in cart, update its quantity in cart
        updatedShirtsList[index].quantity += 1;
        updatedShirtsList[index].subtotal =
          updatedShirtsList[index].quantity * updatedShirtsList[index].price;
      } else {
        // Update the shirt quantity and add it to cart
        updatedShirtsList.push({ ...shirtToAdd, quantity: 1, subtotal: shirtToAdd.price });
      }
      // Update the state with new list
      setShirtsInCart(updatedShirtsList);
    },
    [shirtsInCart],
  );

  const removeFromCart = useCallback(
    (shirtToRemove) => {
      console.log('Remove');
      const updatedShirtsList = [...shirtsInCart];
      const index = updatedShirtsList.findIndex((item) => {
        return shirtToRemove.image === item.image;
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
