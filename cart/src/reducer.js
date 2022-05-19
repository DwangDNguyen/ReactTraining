const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
      break;
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
      break;
    case "INCREASE":
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart,
      };
      break;
    case "DECREASE":
      let temp = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {
        ...state,
        cart: temp,
      };
      break;
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (acc, item) => {
          return {
            total: acc.total + item.price * item.amount,
            amount: acc.amount + item.amount,
          };
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = total.toFixed(2);
      return {
        ...state,
        total,
        amount,
      };
      break;
    case "LOADING":
      return { ...state, loading: true };
      break;
    case "DISPLAY_CART":
      return { ...state, loading: false, cart: action.payload };
      break;
  }

  return state;
};

export default reducer;
