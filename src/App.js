import React, {useState} from "react";

function App() {
  const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, 
            {id: items.length, value: Math.floor(Math.random()*10 +1) }
        ])
    }

    return (
        <>
            <button onClick={addItem}> Add Item </button>
            <ul>
                {items.map (item => <li> {item.value}</li>)}
            </ul>
        </>
    )
}

export default App;
