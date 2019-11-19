import React, { useState, ReactNode, } from 'react';
import TabHeader from './TabHeader';
import TabContent from './TabContent';
import * as P from './parts';

export const Tabs: React.FC = (props) =>{
  const tabs = React.Children.toArray(props.children);
  const [activeTab, setActiveTab] = useState(0);
  
  const onClickTabsItem = (index: number) => {
    setActiveTab(index);
  }

  return(
    <P.TabsWrapper>
      {(tabs.length > 1 && 
      <P.TabsList>
        {tabs.map((child: any, index) => {
          const { title } = child.props;

          return (
            <TabHeader
            index={index}
            isActive={activeTab === index}
            key={index}
            label={title}
            onClick={onClickTabsItem}
            />
          );
          })
        }
      </P.TabsList> )}
      <TabContent >
        {tabs[activeTab]}
      </TabContent >
    </P.TabsWrapper>
  );  
}
 export default Tabs;