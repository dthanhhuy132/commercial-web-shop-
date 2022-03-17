export const ADD_TO_CART_LOCAL = "ADD_TO_CART_LOCAL";

export function addToCartLocal(product) {
  return {
    type: ADD_TO_CART_LOCAL,
    payload: product,
  };
}
