import React, { useReducer } from "react";

function App() {
    const initialState = {
        firstCounter: 0,
        secondCounter: 0
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { ...state, firstCounter: state.firstCounter + action.value };
            case 'decrement':
                return { ...state, firstCounter: state.firstCounter - action.value };
            case 'increment2':
                return { ...state, secondCounter: state.secondCounter + action.value };
            case 'decrement2':
                return { ...state, secondCounter: state.secondCounter - action.value };
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }

    const [counter, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div> First Counter  {counter.firstCounter} </div>
            <div> Second Counter  {counter.secondCounter} </div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}> Increment </button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}> Decrement </button>
            <button onClick={() => dispatch({ type: 'reset' })}> Reset</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}> Increment 2 </button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}> Decrement 2</button>
        </>
    )
}

export default App;
