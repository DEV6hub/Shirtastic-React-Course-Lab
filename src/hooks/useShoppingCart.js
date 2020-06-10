import { useState, useEffect, useCallback } from 'react';

const useShoppingCart = () => {
  const [shirtsInCart, setShirtsInCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [afterTax, setAfterTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newSubTotal = 0;

    shirtsInCart.forEach((shirt) => {
      newSubTotal += shirt.subtotal;
    });

    setSubTotal(Math.round(newSubTotal * 100) / 100);
  }, [shirtsInCart]);

  useEffect(() => {
    setAfterTax(Math.round(subTotal * 0.13 * 100) / 100);
  }, [subTotal]);

  useEffect(() => {
    setShipping(Math.round(subTotal * 0.05 * 100) / 100);
  }, [subTotal]);

  useEffect(() => {
    setTotal(Math.round((subTotal + shipping + afterTax) * 100) / 100);
  }, [subTotal, shipping, afterTax]);

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
    subTotal,
    afterTax,
    shipping,
    total,
  };
};

export default useShoppingCart;
