import React from 'react';
import { IFriendModel } from '../../models/FriendModels';
import { Layout, Title } from '../../ui';
import { Text } from 'react-native';
import { AlignItemTypes, ColorTypes, DirectionTypes } from '../../models/UIModels';

const EmptyFiendsComponent = (): React.ReactElement => {
    return (
        <Layout ai={AlignItemTypes.center}>
            <Text>No Friends</Text>
        </Layout>
    );
};

export interface IFriendListProps {
    friends: Array<IFriendModel>;
}

const FriendList: React.FC<IFriendListProps> = ({ friends }): React.ReactElement => {
    if (!friends) {
        return <EmptyFiendsComponent />;
    }

    return (
        <Layout direction={DirectionTypes.column}>
            {friends.map(({ id, name }) => (
                <Layout key={id}>
                    <Title color={ColorTypes.white}>{name}</Title>
                </Layout>
            ))}
        </Layout>
    );
};

export { FriendList };
