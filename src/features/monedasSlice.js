import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  monedas: [],
};

export const monedasSlice = createSlice({
  name: 'monedasSlice',
  initialState,
  reducers: {
    cargarMonedas: (state, action) => {
      state.monedas = action.payload;
    },
  },
});

export const { cargarMonedas } = monedasSlice.actions;
export default monedasSlice.reducer;
