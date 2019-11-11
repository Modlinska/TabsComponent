import React from 'react';
import * as P from './parts';
import TestComponent from './TestComponent';

export interface TestProps {
   name: string;
}

const TestComponent2: React.FC<TestProps> = (props) => {
    const {
        name }=props;

    const onClick =()=>{
        console.log("klikuklik")
    }

    return (<>
            <div> Baldcwicokcokemwc {name}</div>
            <div onClick={onClick} >Kliknij mnie</div>
            <h2>Test Component 2</h2>
            <TestComponent name={name}/>
            </>
    );
}


export default TestComponent2;