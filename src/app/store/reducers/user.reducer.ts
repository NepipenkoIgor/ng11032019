import { Action } from '@ngrx/store';

export interface IUser {
    name: string;
    bonuses: number;
}

const initialState: IUser = {
    name: 'Igor',
    bonuses: 0.8,
};

export function userReducer(state: IUser = initialState, action: Action): IUser {
    return state;
}
