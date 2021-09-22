import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter'
import productReducer from './reducers/product'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
})
