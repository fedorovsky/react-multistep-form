import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from 'store';

export enum Page {
  Empty = 'Empty',
  Login = 'Login',
  Register = 'Register',
}

export interface Multistep {
  readonly page: Page;
}

const initialState: Multistep = {
  page: Page.Empty,
};

const multistepFormSlice = createSlice({
  name: 'multistep',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
  },
});

export const stateSelector = (state: RootState): Multistep => state.multistep;

export const multistepSelectors = {
  page: createSelector(stateSelector, (state) => state.page),
};

export const multistepActions = multistepFormSlice.actions;
export const multistepReducer = multistepFormSlice.reducer;
