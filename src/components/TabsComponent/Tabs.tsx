import React, { useState, ReactNode, } from 'react';
import TabHeader from './TabHeader';
import TabContent from './TabContent';
import * as P from './parts';

interface TabsProps  {
    children?:any;
}
export const Tabs: React.FC<TabsProps> = (props) =>{
  const { children } = props;
  const hasChildProps =(child: any) => child.props && child;
  const childrenToRender = children.filter(hasChildProps); console.log(childrenToRender);
  const firstTab = (childrenToRender) ? childrenToRender[0] : null;
  const [isActive, setIsActive] = useState( (childrenToRender) ? firstTab.props.title : '');
  
  const onClickTabsItem = (title: string, e: any) =>{
      console.log(title);
      const activeLabel = title;
      setIsActive(activeLabel);
  }

  return(
    <P.TabsWrapper>
      {(childrenToRender.length > 1 && 
      <P.TabsList className="tab-list">
        {childrenToRender.map((child: any) => {
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
      </P.TabsList> )}
      <TabContent >
        {(childrenToRender.length >1) ? childrenToRender.map((child:any) => {
          if ((child.props.title )!== isActive) return undefined;
          return child.props.children; 
          }): childrenToRender[0].props.children
        }
      </TabContent >
    </P.TabsWrapper>
  );  
}
 export default Tabs;