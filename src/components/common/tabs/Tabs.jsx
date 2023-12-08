import React, { useState } from 'react';

const tabs = [
  { id: 1, label: 'Tab 1', content: 'Content for Tab 1' },
  { id: 2, label: 'Tab 2', content: 'Content for Tab 2' },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className=" max-w-md mx-auto mt-8 w-20 bg-white">
      <div className="flex space-x-4 w-32 relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer p-4 w-16 h-6 text-center border-b-2 duration-700 ${
              activeTab === tab.id ? 'bg-slate-200' : 'border-transparent'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
          
        ))}
      </div>
      {/* <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-transform transform ${
              activeTab === tab.id ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Tabs;