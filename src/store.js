import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter'
import productReducer from './reducers/product'

// const customMiddleware = (storeApi) => (next) => (action) => {
//   if (action.type.includes('selectProduct')) {
//     console.log('custom middleware', storeApi.getState(), action)
//   }
//   return next(action)
// }

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
  // middleware: (getMiddleware) => {
  //   console.log(getMiddleware())
  //   return [...getMiddleware(), customMiddleware]
  // },
})
