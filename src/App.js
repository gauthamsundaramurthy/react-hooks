import React from "react";
import Intermediate from './Intermediate';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
    return (
        <>
            <div>
                <UserContext.Provider value={'Vishwas'}>
                    <ChannelContext.Provider value={'Codevolution'}>
                        <Intermediate />
                    </ChannelContext.Provider>
                </UserContext.Provider>
            </div>
        </>
    )
}

export default App;
