import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Layout } from '../../ui';
import { AlignItemTypes, BackgroundTypes, DirectionTypes, JustifyContentTypes } from '../../models/UIModels';
import { SmokeButton } from '../../widgets/SmokeButton';
import { fetchFriends } from '../../store/reducers/friendsReducer/actions';
import mockedFriends from '../../mockedData/friends.json';
import { FriendList } from '../../widgets';

interface IMainInterface {
    onGoSmoke: (...args: any) => any;
}

const Main = ({ friends, fetchFriends }: any): React.ReactElement => {
    useEffect(() => {
        setTimeout(() => {
            fetchFriends(mockedFriends);
        }, 1000);
    }, []);

    return (
        <Layout
            direction={DirectionTypes.column}
            fullHeight
            bg={BackgroundTypes.green}
            ai={AlignItemTypes.center}
            jc={JustifyContentTypes.center}
        >
            <FriendList friends={friends} />
            <SmokeButton onClick={(i) => i} />
        </Layout>
    );
};

const ConnectedMain = connect(
    ({ friends }: any) => ({
        friends: friends.friends,
    }),
    { fetchFriends }
)(Main);

export { ConnectedMain as Main };
