import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from 'store';

export interface Multistep {
  readonly type: string;
}

const initialState: Multistep = {
  type: 'initial',
};

const multistepFormSlice = createSlice({
  name: 'multistep',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const stateSelector = (state: RootState): Multistep => state.multistep;
export const typeSelector = createSelector(
  stateSelector,
  (state) => state.type,
);

export const multistepActions = multistepFormSlice.actions;
export const multistepReducer = multistepFormSlice.reducer;
