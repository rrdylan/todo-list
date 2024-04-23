import React from 'react';
import axios from 'axios';
import './App.css';


const apiCall = () => {
    axios.get('http://localhost:8080').then((data) => {
        console.log(data);
    });
}

function App() {

    const [data, setData] = React.useState(null);

    React.useEffect( ()=> {
        axios.get("/api")
            .then((result) => {
                setData( result.data.message );
            })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={apiCall}> Make API call</button>
                <p> { !data ? "Chargement..." : data} </p>
            </header>
        </div>
    );
}

export default App;
