import React from 'react';
import { IFriendModel } from '../../models/FriendModels';
import { Layout, Title } from '../../ui';
import { Text } from 'react-native';
import { AlignItemTypes, ColorTypes, DirectionTypes, JustifyContentTypes } from '../../models/UIModels';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Checkbox } from '../../ui/Checkbox';

const EmptyFiendsComponent = (): React.ReactElement => {
    return (
        <Layout ai={AlignItemTypes.center}>
            <Text>No Friends</Text>
        </Layout>
    );
};

export interface IFriendListProps {
    friends: Array<IFriendModel>;
    selectedFriendIds: Array<string>;
    setSelectedFriend: (id: string) => void;
}

const FriendList: React.FC<IFriendListProps> = ({
    friends,
    selectedFriendIds,
    setSelectedFriend,
}): React.ReactElement => {
    if (!friends) {
        return <EmptyFiendsComponent />;
    }

    const onSelectFriend = (id: string): void => {
        setSelectedFriend(id);
    };

    return (
        <Layout direction={DirectionTypes.column}>
            {friends.map(({ id, name }) => (
                <Layout
                    onPress={() => onSelectFriend(id)}
                    customStyle={styles.friends__item}
                    key={id}
                    jc={JustifyContentTypes.spaceBetween}
                >
                    <Title customStyles={styles.friends__item_title} color={ColorTypes.black}>
                        {name}
                    </Title>
                    <Checkbox id={id} value={selectedFriendIds.includes(id)} />
                </Layout>
            ))}
        </Layout>
    );
};

export { FriendList };

const styles = EStyleSheet.create({
    friends__item: {
        height: 30,
        marginVertical: 10,
        width: '100%',
        borderColor: '$green',
        borderStyle: 'solid',
        borderBottomWidth: 1,
    },
    friends__item_title: {},
});
