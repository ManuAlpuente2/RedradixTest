import React, { useState } from 'react';
import "./style.scss";
import Profile from './../Profile';

const Tabs = ({users}) => {

  const tabs = ['First tab', 'Second tab', 'Third tab', 'Fourth tab'];
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs-container">
        <div className="horizontalScroll-container">
          <ul className="tab-selector horizontalScroll-handler">
            {tabs.map((tab, i) => (
              <li
                key={`tab_${i}`}
                className={`tab ${currentTab === i ? 'tab__current' : ''}`}
                onClick={() => setCurrentTab(i)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        <div className="tabs-content">
          <Profile user={users[currentTab]} />
        </div>
      </div>
    </div>
  );
}

export default Tabs;