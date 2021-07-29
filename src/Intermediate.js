import React, { useContext } from "react";
import Child from './Child';
import { UserContext, ChannelContext } from './App';

export default function Intermediate() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            <Child user={user} channel={channel} />
        </div>
    )
}