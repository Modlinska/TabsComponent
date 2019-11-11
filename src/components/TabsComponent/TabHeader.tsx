import React from 'react';
import * as P from './parts';

export interface TabHeaderProps {
    activeTab?: string;
    label?: string;
    onClick: any;
}

const TabHeader: React.FC<TabHeaderProps> = (props) => {
    const {
        label, 
        activeTab,
        onClick }=props;

    return (
        <P.TabsListElement
            onClick={() => onClick(label)}
        >
            {label}
        </P.TabsListElement>
    );
}


export default TabHeader;
