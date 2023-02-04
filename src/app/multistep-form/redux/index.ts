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

export enum Field {
  Nickname = 'nickname',
  Email = 'email',
  Password = 'password',
}

export interface Multistep {
  readonly page: Page;
  readonly step: Step;
  readonly formData: {
    readonly [Field.Nickname]: string;
    readonly [Field.Email]: string;
    readonly [Field.Password]: string;
  };
}

const initialState: Multistep = {
  page: Page.Login,
  step: Step.Nickname,
  formData: {
    [Field.Nickname]: '',
    [Field.Email]: '',
    [Field.Password]: '',
  },
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
    setNickname: (state, action: PayloadAction<string>) => {
      state.formData[Field.Nickname] = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.formData[Field.Email] = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.formData[Field.Password] = action.payload;
    },
  },
});

export const stateSelector = (state: RootState): Multistep => state.multistep;

const fromDataSelector = createSelector(
  stateSelector,
  (state) => state.formData,
);

export const multistepSelectors = {
  page: createSelector(stateSelector, (state) => state.page),
  step: createSelector(stateSelector, (state) => state.step),
  formData: fromDataSelector,
  fieldValue: createSelector(
    [fromDataSelector, (state, fieldName: Field) => fieldName],
    (formData, fieldName) => {
      return formData[fieldName];
    },
  ),
};

export const multistepActions = multistepFormSlice.actions;
export const multistepReducer = multistepFormSlice.reducer;
