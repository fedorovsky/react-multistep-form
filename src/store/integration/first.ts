import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { RootState } from '../index';

/**
 * Constants
 */
export enum ACTION {
  FIRST_REQUEST = '@@integration/first/FIRST_REQUEST',
}

export interface IntegrationFirst {
  readonly data: string[];
  readonly loading: boolean;
}

const initialState: IntegrationFirst = {
  data: [],
  loading: false,
};

const reducer: Reducer<IntegrationFirst, ActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ACTION.FIRST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export { reducer as firstReducer };

/**
 * Selectors
 */
export const stateSelector = (state: RootState): IntegrationFirst =>
  state.integration.first;

export const firstDataSelector = createSelector(
  stateSelector,
  (state) => state.data,
);

/**
 * Action Creators
 */
interface FirstRequest {
  type: typeof ACTION.FIRST_REQUEST;
}

type ActionType = FirstRequest;

// type ThunkResult<R> = ThunkAction<R, RootState, void, ActionType>;
