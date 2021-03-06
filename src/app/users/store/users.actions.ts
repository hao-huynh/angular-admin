import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export const loadUsers = createAction(
  '[Users] Load Users'
);

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: any }>()
);


export const loadUser = createAction(
  '[Users] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[Users] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[Users] Load User Failure',
  props<{ error: any }>()
);
