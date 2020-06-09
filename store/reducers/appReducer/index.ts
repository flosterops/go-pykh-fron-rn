import { AppActionTypes, IAppReducerModel } from './types';

const initialState: IAppReducerModel = {};

export default function (state: IAppReducerModel, action: AppActionTypes): IAppReducerModel {
    switch (action) {
        default:
            return { ...state };
    }
}
