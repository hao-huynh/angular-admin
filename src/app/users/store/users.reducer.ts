import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import { initialState , UsersState} from './users.state';

export const usersFeatureKey = 'users';


const usersReducer = createReducer(
  initialState,

  on(UsersActions.loadUsers, state => ({...state, loading: true, error: null})),
  on(UsersActions.loadUsersSuccess, (state, { data }) => ({...state, loading: false, error: null, data})),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({...state, loading: false, error})),

);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
