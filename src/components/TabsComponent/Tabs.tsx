import React, { useState, ReactNode, } from 'react';
import TabHeader from './TabHeader';
import TabContent from './TabContent';
import * as P from './parts';

interface TabsProps  {
    children?:any;
}
export const Tabs: React.FC<TabsProps> = (props) =>{
  
  const firstTab = (props.children.length)? props.children[0] : null;
  const [isActive, setIsActive] = useState( (props.children.length)? firstTab.props.title : '');
  
  const onClickTabsItem = (title: string, e: any) =>{
      console.log(title);
      const activeLabel =title;
      setIsActive(activeLabel);
  }
  return(
    <P.TabsWrapper>
      {(props.children.length) && 
      <P.TabsList className="tab-list">
        {props.children.map((child: any) => {
          const { title } = child.props;

          return (
            <TabHeader
            activeTab={isActive}
            key={title}
            label={title}
            onClick={onClickTabsItem}
            />
          );
          })
        }
    </P.TabsList> }
      <TabContent >
        {(props.children.length) ? props.children.map((child:any) => {
          if (child.props.title !== isActive) return undefined;
          return child.props.children; 
          }): props.children.props.children
        }
      </TabContent >
    </P.TabsWrapper>
  );  
}
 export default Tabs;