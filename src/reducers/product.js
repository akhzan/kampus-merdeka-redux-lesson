import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = { loading: false, products: [], selectedProduct: null, error: null }

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload
    },
    getProductsStarted: (state) => {
      state.loading = true
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload
      state.loading = false
    },
    getProductsFailed: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { selectProduct, getProductsStarted, getProductsSuccess, getProductsFailed } = productSlice.actions
export default productSlice.reducer

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch(getProductsStarted())
  try {
    const response = await axios('http://localhost:8080/')
    const filteredResponse = response.data.data.filter((product) => product.id < 10)
    dispatch(getProductsSuccess(filteredResponse))
  } catch (err) {
    dispatch(getProductsFailed(err.response?.data.message || 'Error when calling API.'))
  }
}
