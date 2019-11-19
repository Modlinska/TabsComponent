import React from 'react';
import * as P from './parts';

export interface TabHeaderProps {
    isActive: boolean;
    label?: string;
    onClick: (index: number) => void;
    index: number;
}

const TabHeader: React.FC<TabHeaderProps> = (props) => {
    const {
        index,
        label, 
        isActive,
        onClick }=props;

    return (
        <P.TabsListElement
            isActive={isActive}
            onClick={() => onClick(index)}
        >
            {label}
        </P.TabsListElement>
    );
}


export default TabHeader;
