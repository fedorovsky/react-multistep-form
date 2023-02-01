import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from 'store';

export enum Page {
  Empty = 'Empty',
  Login = 'Login',
  Register = 'Register',
}

export enum Step {
  Empty = 'Empty',
  Nickname = 'Nickname',
  Email = 'Email',
  Password = 'Password',
}

export interface Multistep {
  readonly page: Page;
  readonly step: Step;
}

const initialState: Multistep = {
  page: Page.Login,
  step: Step.Nickname,
};

const multistepFormSlice = createSlice({
  name: 'multistep',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
    setStep: (state, action: PayloadAction<Step>) => {
      state.step = action.payload;
    },
  },
});

export const stateSelector = (state: RootState): Multistep => state.multistep;

export const multistepSelectors = {
  page: createSelector(stateSelector, (state) => state.page),
  step: createSelector(stateSelector, (state) => state.step),
};

export const multistepActions = multistepFormSlice.actions;
export const multistepReducer = multistepFormSlice.reducer;
