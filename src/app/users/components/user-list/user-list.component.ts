import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user.model';
import {select, Store} from '@ngrx/store';
import {getError, getLoading, getUsers} from '../../store/users.selectors';
import * as UsersActions from '../../store/users.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;
  error$: Observable<any>;
  loading$: Observable<boolean>;
  columnDefs = [
    {headerName: 'Id', field: 'id' },
    {headerName: 'Name', field: 'name', sortable: true },
    {headerName: 'Username', field: 'username', sortable: true},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Phone', field: 'phone'},
    {headerName: 'Website', field: 'website'}
  ];
  constructor(private store: Store<any>) {
    this.users$ = this.store.pipe(
      select(getUsers)
    );

    this.error$ = this.store.pipe(select(getError));

    this.loading$ = this.store.pipe(
      select(getLoading)
    );
  }

  ngOnInit() {
    this.store.dispatch(UsersActions.loadUsers());
  }

}
