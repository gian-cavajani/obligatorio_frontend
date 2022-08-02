import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transacciones: [],
};

export const transaccionesSlice = createSlice({
  name: 'transaccionesSlice',
  initialState,
  reducers: {
    cargarTransacciones: (state, action) => {
      state.transacciones = action.payload;
    },
    sumarTransaccion: (state, action) => {
      state.transacciones.push(action.payload);
    },
  },
});

export const { cargarTransacciones, sumarTransaccion } =
  transaccionesSlice.actions;
export default transaccionesSlice.reducer;
