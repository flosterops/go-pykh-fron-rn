import { IFriendModel } from '../../../models/FriendModels';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';

export interface IFetchFriendsAction {
    type: typeof FETCH_FRIENDS;
    payload: Array<IFriendModel>;
}

export interface IFriendsReducerModel {
    friends: Array<IFriendModel>;
    selectedFriendIds: Array<string>;
}

export type FriendsReducerActionTypes = IFetchFriendsAction;
