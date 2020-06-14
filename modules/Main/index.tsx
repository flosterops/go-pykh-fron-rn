import React, { useEffect, useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { fetchFriends, setSelectedFriend } from '../../store/reducers/friendsReducer/actions';
import { FriendList, ModalComponent, SmokeButton } from '../../widgets';
import { CustomButton, Layout } from '../../ui';
import { IFriendModel } from '../../models/FriendModels';
import { AlignItemTypes, BackgroundTypes, DirectionTypes, JustifyContentTypes } from '../../models/UIModels';
import mockedFriends from '../../mockedData/friends.json';
import { white } from '../../styles/colors';

interface IMainInterface {
    onGoSmoke: (...args: any) => any;
    friends: Array<IFriendModel>;
    fetchFriends: (...args: any) => any;
    setSelectedFriend: (id: string) => void;
    selectedFriendIds: Array<string>;
}

const Main: React.FC<IMainInterface> = ({
    friends,
    fetchFriends,
    setSelectedFriend,
    selectedFriendIds,
}): React.ReactElement => {
    const [friendsModal, setFriendsModal] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            fetchFriends(mockedFriends);
        }, 1000);
    }, []);

    const onInviteFriends = () => {
        setFriendsModal(!friendsModal);
    };

    return (
        <Layout
            direction={DirectionTypes.column}
            fullHeight
            bg={BackgroundTypes.green}
            ai={AlignItemTypes.center}
            jc={JustifyContentTypes.center}
        >
            {friendsModal && (
                <ModalComponent
                    onClose={onInviteFriends}
                    onSubmit={onInviteFriends}
                    buttonText="Invite"
                    title="Invite friends"
                >
                    <FriendList
                        friends={friends}
                        setSelectedFriend={setSelectedFriend}
                        selectedFriendIds={selectedFriendIds}
                    />
                </ModalComponent>
            )}
            <SmokeButton onClick={(i) => i} />
            <CustomButton
                customStyle={styles.invite_btn}
                onPress={onInviteFriends}
                color={white}
                text={'Invite Friends'}
            />
        </Layout>
    );
};

const ConnectedMain = connect(
    ({ friends }: any) => ({
        friends: friends.friends,
        selectedFriendIds: friends.selectedFriendIds,
    }),
    { fetchFriends, setSelectedFriend }
)(Main);

export { ConnectedMain as Main };

const styles = EStyleSheet.create({
    invite_btn: {
        width: '100%',
        marginTop: 50,
    },
});
