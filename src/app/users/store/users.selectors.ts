import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsersState } from './users.state';

export const getUsersState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(
  getUsersState,
  users => users.data
);

export const getLoading = createSelector(
  getUsersState,
  customers => customers.loading
);

export const getError = createSelector(
  getUsersState,
  customers => customers.error
);
