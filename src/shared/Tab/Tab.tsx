import React from 'react';
import '../../styles/tab.css';
import { Tab } from '../../Interface/Tab.interface';

interface IProps {
    tabs: Tab[];
    selectedTab: string;
    changeTab: any;
}

function TabControl({tabs, selectedTab, changeTab}: IProps) {
    return (
        <>
            <div className="container">
                {tabs.map((tab) => {
                    return (
                        <div className={tab.name === selectedTab ? 'tab-item selected' : 'tab-item'} 
                            key={tab.id}
                            onClick={() => changeTab(tab.name)}>
                            {tab.name}
                        </div>
                    )
                    })}
            </div>
        </>
    )
}

export default TabControl;