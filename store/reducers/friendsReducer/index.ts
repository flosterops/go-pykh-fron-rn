import { FETCH_FRIENDS, FriendsReducerActionTypes, IFriendsReducerModel, SET_SELECTED_FRIEND } from './types';

const initialState: IFriendsReducerModel = {
    friends: [],
    selectedFriendIds: [],
};

export default function (state = initialState, action: FriendsReducerActionTypes): IFriendsReducerModel {
    switch (action.type) {
        case FETCH_FRIENDS:
            return {
                ...state,
                friends: action.payload,
            };
        case SET_SELECTED_FRIEND:
            return {
                ...state,
                selectedFriendIds: action.payload,
            };
        default:
            return { ...state };
    }
}
