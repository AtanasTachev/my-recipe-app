import { IUser } from '../core/interfaces/user';

export * from './reducers';
export * from './actions';

export interface IRootStore {
    currentUser: IUser
}