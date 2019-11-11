import React, {  ReactNode, Children } from 'react';
import * as P from './parts';

interface TabProps {
    children: any;
}
export const Tab: React.FC<TabProps> = (props) =>{

    return (
        <P.Tab>
            {props.children}
        </P.Tab>
    );
    
}
 export default Tab;