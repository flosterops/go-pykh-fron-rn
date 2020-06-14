import { IFriendModel } from '../../../models/FriendModels';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const SET_SELECTED_FRIEND = 'SET_SELECTED_FIEND';

export interface IFetchFriendsAction {
    type: typeof FETCH_FRIENDS;
    payload: Array<IFriendModel>;
}

export interface ISetSelectedFriendAction {
    type: typeof SET_SELECTED_FRIEND;
    payload: Array<string>;
}

export interface IFriendsReducerModel {
    friends: Array<IFriendModel>;
    selectedFriendIds: Array<string>;
}

export type FriendsReducerActionTypes = IFetchFriendsAction | ISetSelectedFriendAction;
