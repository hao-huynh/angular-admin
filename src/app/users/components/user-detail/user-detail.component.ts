import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs';
import {User} from '../../model/user.model';
import * as UsersActions from '../../store/users.actions';
import {getError, getLoading, getSelectedUser} from '../../store/users.selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User>;
  error$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store<any>, private route: ActivatedRoute, private location: Location) {
    this.user$ = this.store.pipe(select(getSelectedUser));

    this.error$ = this.store.pipe(select(getError));

    this.loading$ = this.store.pipe(
      select(getLoading)
    );
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(UsersActions.loadUser({ id }));
  }

  goBack() {
    this.location.back();
  }

}
