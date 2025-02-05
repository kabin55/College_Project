import { useContext } from "react";
import { userContext } from "./Component1";
export function Component3(){
    const user = useContext(userContext);
    return <>
        Hello again from {user.name}
    </>
}