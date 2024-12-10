export const getBasketTotal = (basket) =>
  basket?.reduce((total, item) => total + item.price, 0);

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Item (id: ${action.id}) not found in basket!`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
