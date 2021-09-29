import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = { loading: 'idle', entities: {} }

export const fetchPokemonById = createAsyncThunk('pokemon/fetchPokemonById', async (pokemonId) => {
  const response = await axios(`http://localhost:8080/${pokemonId}`)
  return response.data.data
})

export const updatePokemon = createAsyncThunk('pokemon/updatePokemon', async (pokemonId) => {
  const response = await axios(`http://localhost:8080/${pokemonId}`)
  return response.data.data
})

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonById.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchPokemonById.fulfilled, (state, action) => {
      state.entities = action.payload
      state.loading = 'idle'
    })
    builder.addCase(fetchPokemonById.rejected)
  },
})

export default pokemonSlice.reducer
