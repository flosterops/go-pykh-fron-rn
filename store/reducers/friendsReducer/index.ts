import { FETCH_FRIENDS, FriendsReducerActionTypes, IFriendsReducerModel } from './types';

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
        default:
            return { ...state };
    }
}
