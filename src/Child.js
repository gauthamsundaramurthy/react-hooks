import React from "react";

export default function Child({ user, channel }) {
    return (
        <div>
            User context value {user}, channel context value {channel}
        </div>
    )
}