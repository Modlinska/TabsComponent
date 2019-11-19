import React, { ReactNode } from 'react';
import * as P from './parts';

interface TabProps {
    children: ReactNode;
    title?: string;
}
export const Tab: React.FC<TabProps> = (props) =>{

    return (
        <P.Tab>
            {props.children}
        </P.Tab>
    );
    
}
 export default Tab;