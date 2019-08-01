import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export const loadUsers = createAction(
  '[Users] Load Userss'
);

export const loadUsersSuccess = createAction(
  '[Users] Load Userss Success',
  props<{ data: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Userss Failure',
  props<{ error: any }>()
);
