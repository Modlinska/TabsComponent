import React, {  ReactNode } from 'react';
import * as P from './parts';

interface TabsContentProps  {
    children?: ReactNode;
    title?: string;
}

export const Tab: React.FC<TabsContentProps> = (props) =>{

    return (
        <P.Div>
            {props.children}
        </P.Div>
    );
    
}
 export default Tab;