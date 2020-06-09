import { Dispatch } from 'redux';
import { IFriendModel } from '../../../models/FriendModels';
import { FETCH_FRIENDS, IFetchFriendsAction } from './types';

export const fetchFriends = (friends: Array<IFriendModel>) => (dispatch: Dispatch<IFetchFriendsAction>): void => {
    dispatch({
        type: FETCH_FRIENDS,
        payload: friends,
    });
};

export const setSelectedFriend = (id: string) => (dispatch: Dispatch<any>) => {

};
