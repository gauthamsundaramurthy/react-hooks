import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
	const [post, setPost] = useState([]);
    
    useEffect (
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then (res => setPost(res.data))
            .catch(err => console.log(err));
        },[]
    );


    return (
        <div>
            <ul> 
                {post.map(p => <li key={p.id}>{p.title}</li>)}
            </ul>
        </div>
    )
}

export default App;
