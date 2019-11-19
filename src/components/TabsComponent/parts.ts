import React from 'react'
import styled from 'styled-components'

export const TabsWrapper = styled.div`

`;

export const TabsListElement = styled.li<{isActive:boolean}>`
    display: inline-block;
    list-style: none;
    padding: 4px 8px;
    color: grey;
    cursor:pointer;
    ${({ isActive }) => isActive && `
        border-bottom:4px solid blue;
        color: black;
    `}
    :hover {
        color: blue
    }

`;

export const Div = styled.div``;

export const TabsList = styled.ol`
    padding: 0;
`;

export const Tab = styled.div``;