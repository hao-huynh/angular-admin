import { User } from '../model/user.model';

export interface UsersState {
  users?: User[];
  selectedUser?: User;
  loading: boolean;
  error?: any;
}

export const initialState: UsersState = {
  users: null,
  selectedUser: null,
  loading: true,
  error: null
};
