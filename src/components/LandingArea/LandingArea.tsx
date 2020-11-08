import React from 'react';
import WorldView from '../WorldView/WorldView';
import TabularView from '../TabularView/TabularView';
import { HEADERCONST } from '../../constants/TabConstants';
import './LandingArea.css';

interface IProps {
    selectedTab: string;
}

const LandingArea = ({selectedTab}: IProps) => {
   
    return (
        <div className="view-container">
            {selectedTab === HEADERCONST.WORLD_VIEW ? <WorldView></WorldView> : <></>}
            {selectedTab === HEADERCONST.COUNTRY_VIEW ? <TabularView></TabularView> : <></>}

        </div>
    )
}

export default LandingArea