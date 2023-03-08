import { createSlice } from "@reduxjs/toolkit"

const compareSlice = createSlice({
    name : 'Compare',
    initialState: [],
    reducers : {
        addToCompare: (state, action) => {
            const itemExists = state.find((item) => item.slug === action.payload.slug);
            if (itemExists) {
              itemExists.quantity++;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
          },
          removeFromCompare: (state, action) => {
            const index = state.findIndex((item) => item.slug === action.payload);
            state.splice(index, 1);
          },
    },
});

export const compareReducer = compareSlice.reducer;

export const {
  addToCompare,
  removeFromCompare,
} = compareSlice.actions;