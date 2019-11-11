import React from 'react';
import * as P from './parts';

export interface TestProps {
   name: string;
}

const TestComponent: React.FC<TestProps> = (props) => {
    const {
        name }=props;

    const onClick =()=>{
        console.log("klikuklik")
    }

    return (<>
            <div> Baldcwicokcokemwc {name}</div>
            <div onClick={onClick} >Kliknij mnie</div>
            </>
    );
}


export default TestComponent;