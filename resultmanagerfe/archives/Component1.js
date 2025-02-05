import { createContext, useState } from "react";
import { Component2 } from "./Component2";
export const userContext = createContext();

export function Component1() {
    const [user, setUser] = useState({name: 'ABCD'});

    return <>
        <userContext.Provider value={user}>
        <p>Hello I'm {user.name}</p>
        <Component2 />
        </userContext.Provider>
    </>
}