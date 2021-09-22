import { createSlice } from '@reduxjs/toolkit'

const initialState = { selectedProduct: null }

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      console.log(action)
      state.selectedProduct = action.payload
    },
  },
})

export const { selectProduct } = productSlice.actions
export default productSlice.reducer
