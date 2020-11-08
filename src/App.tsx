import React, { useState } from 'react';
import './App.css';
import TabControl from '../src/shared/Tab/Tab';
import { TABCONSTANTS, HEADERCONST } from '../src/constants/TabConstants';
import LandingArea from '../src/components/LandingArea/LandingArea';

function App() {

  let [selectedTab, changeSelectedTab] = useState(HEADERCONST.WORLD_VIEW);

  return (
    <div className="App">
      <TabControl tabs={TABCONSTANTS} selectedTab={selectedTab} changeTab={(val: string) => changeSelectedTab(val)}></TabControl>
      <LandingArea selectedTab={selectedTab}></LandingArea>
    </div>
  );
}

export default App;
