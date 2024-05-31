export const cartReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "ADD_TO_CART":
        return { ...state, cartList: payload.products };
        
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartList: state.cartList.filter(item => item.id !== payload.id)
        };
        
      case "UPDATE_TOTAL":
        return { ...state, total: payload.total };
        
      default:
        return state;
    }
  };
  