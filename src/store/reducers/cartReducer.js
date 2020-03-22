import * as actionTypes from '../constants'

const initialState = {
  shoppingCart: [],
  shoppingCartTotal: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        productVariantModalOpen: false,
        shoppingCart: [...state.shoppingCart, action.payload]
      }
    case actionTypes.REMOVE_FROM_CART:
      return { ...state, shoppingCart: state.shoppingCart.filter((item, idx) => item.id !== action.payload.id) }
    default:
      return state
  }
}

export default reducer
