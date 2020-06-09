import React from 'react';
import { connect } from 'react-redux';
import { Layout } from '../../ui';
import { AlignItemTypes, DirectionTypes, JustifyContentTypes } from '../../models/UIModels';
import { SmokeButton } from '../../widgets/SmokeButton';

interface IMainInterface {
    onGoSmoke: (...args: any) => any;
}

const Main = () => {
    return (
        <Layout direction={DirectionTypes.column} jc={JustifyContentTypes.center} ai={AlignItemTypes.center} fullHeight>
            <SmokeButton onClick={(i) => i} />
        </Layout>
    );
};

const ConnectedMain = connect((store: any) => store, {})(Main);

export { ConnectedMain as Main };
