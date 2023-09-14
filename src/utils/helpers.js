export const totalProductPrice = (price, quantity) => {
  const sum = price * quantity;
  return sum.toFixed(2);
};
