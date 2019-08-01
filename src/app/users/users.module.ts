import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
    AgGridModule.withComponents([])
  ]
})
export class UsersModule { }
