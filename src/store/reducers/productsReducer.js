import * as actionTypes from '../constants'

const initialState = {
  productsLoading: false,
  productsError: null,
  products: [],
  productsGroup: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS_BEGIN:
      return {
        ...state,
        productsLoading: true,
        productsError: null
      }
    case actionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLoading: false,
        productsError: null,
        products: action.payload
      }
    case actionTypes.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        productsLoading: false,
        productsError: action.error
      }
    case actionTypes.SORT_PRODUCTS_TITLE_ASC:
      return {
        ...state,
        products: action.payload
      }
    case actionTypes.SORT_PRODUCTS_TITLE_DESC:
      return {
        ...state,
        products: action.payload
      }
    case actionTypes.SORT_PRODUCTS_PRICE_ASC:
      return {
        ...state,
        products: action.payload
      }
    case actionTypes.SORT_PRODUCTS_PRICE_DESC:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}
export default reducer
