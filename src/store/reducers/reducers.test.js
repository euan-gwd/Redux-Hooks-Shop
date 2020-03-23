import * as actionTypes from '../constants'
import productsReducer from './productsReducer'
import cartReducer from './cartReducer'

describe('Cart Reducer Tests', () => {
  test('should render initial state', () => {
    const expectedState = {
      shoppingCart: [],
      shoppingCartTotal: 0
    }
    const newState = cartReducer(undefined, { type: 'INIT' })
    expect(newState).toEqual(expectedState)
  })

  test('should add product to cart', () => {
    const state = cartReducer(undefined, { type: 'INIT' })
    const product = { id: Date.now(), name: 'mock Product', price: 100 }
    const newState = cartReducer(state, { type: actionTypes.ADD_TO_CART, payload: product })
    console.log('newState', newState)
    expect(newState.shoppingCart.length).toBe(1)
  })
})

describe('productsReducer Tests', () => {
  test('should render initial state', () => {
    const expectedState = {
      productsLoading: false,
      productsError: null,
      products: [],
      productsGroup: 0
    }
    const newState = productsReducer(undefined, { type: 'INIT' })
    expect(newState).toEqual(expectedState)
  })
})
