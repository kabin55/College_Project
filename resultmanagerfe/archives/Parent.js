import { useState } from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";
export function Parent() {
    const [count, setCount] = useState(0);
    const buttonClick = (button) => {
        setCount(count+1);
    }
    return <>
        <Child1 message={`I'm First Child`} onClick={buttonClick} count={count} />
        <Child2 message={`I'm Second Child`} onClick={buttonClick} count={count}/>
    </>
}