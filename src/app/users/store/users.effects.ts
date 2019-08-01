import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as UsersActions from './users.actions';
import { UsersService } from '../services/users.service';



@Injectable()
export class UsersEffects {
  constructor(private usersService: UsersService, private actions$: Actions) {}

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.loadUsers),
    concatMap(() =>
      this.usersService.getUsers().pipe(
        map(data => UsersActions.loadUsersSuccess({ data })),
        catchError(error => of(UsersActions.loadUsersFailure({ error }))))
    )
  ));


}
