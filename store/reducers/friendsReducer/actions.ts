import { Dispatch } from 'redux';
import store from '../../../store';
import { IFriendModel } from '../../../models/FriendModels';
import { FETCH_FRIENDS, IFetchFriendsAction, ISetSelectedFriendAction, SET_SELECTED_FRIEND } from './types';

export const fetchFriends = (friends: Array<IFriendModel>) => (dispatch: Dispatch<IFetchFriendsAction>): void => {
    dispatch({
        type: FETCH_FRIENDS,
        payload: friends,
    });
};

export const setSelectedFriend = (id: string) => (dispatch: Dispatch<ISetSelectedFriendAction>) => {
    const { selectedFriendIds } = store.getState().friends;
    if (!selectedFriendIds.includes(id)) {
        return dispatch({
            type: SET_SELECTED_FRIEND,
            payload: [...selectedFriendIds, id],
        });
    }

    const filteredSelectedFriendIds = selectedFriendIds.filter((friendId) => friendId !== id);
    dispatch({
        type: SET_SELECTED_FRIEND,
        payload: filteredSelectedFriendIds,
    });
};
