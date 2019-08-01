import { User } from '../model/user.model';

export interface UsersState {
  data?: User[];
  loading: boolean;
  error?: any;
}

export const initialState: UsersState = {
  data: null,
  loading: true,
  error: null
};
