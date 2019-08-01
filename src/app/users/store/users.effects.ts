import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as UsersActions from './users.actions';
import { UsersService } from '../services/users.service';



@Injectable()
export class UsersEffects {
  constructor(private usersService: UsersService, private actions$: Actions) {}

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.loadUsers),
    switchMap(() =>
      this.usersService.getUsers().pipe(
        map(users => UsersActions.loadUsersSuccess({ users })),
        catchError(error => of(UsersActions.loadUsersFailure({ error }))))
    )
  ));

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.loadUser),
    switchMap((action) =>
      this.usersService.getUser(action.id).pipe(
        map(user => UsersActions.loadUserSuccess({ user })),
        catchError(error => of(UsersActions.loadUserFailure({ error }))))
    )
  ));
}
