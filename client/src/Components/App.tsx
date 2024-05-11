import React from 'react';
// import axios from 'axios';
import TodoItem from './TodoItem';
import '../Styles/App.css';


// const apiCall = () => {
//     axios.get('http://localhost:8080').then((data) => {
//         console.log(data);
//     });
// }

//React.FC == function()
const App = (): React.JSX.Element => {

    // const [data, setData] = React.useState(null);
    const [todos, setTodos] = React.useState<TodoItem[]>([]);
    const [newTodo, setNewTodos] = React.useState('');

    const addTodo = () => {
        if( newTodo !== '') {
            const newId = crypto.randomUUID();
            const newTodoItem: TodoItem = {
                id: newId,
                text: newTodo,
                completed: false,
            };
            setTodos([...todos, newTodoItem]);
            setNewTodos('');
        }
    }

    const removeTodo = (id: string) => {
        const updateTodos = todos.filter( (todo) => todo.id !== id );
        setTodos(updateTodos);
    }

    const toogleComplete = (id: string) => {
        const updatedTodos = todos.map( (todo) => {
            if( todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        setTodos( updatedTodos );
    }

    // React.useEffect( ()=> {
    //     axios.get("/api")
    //         .then((result) => {
    //             setData( result.data.message );
    //         })
    // }, []);

    return (
        <div className="App">

            <div className="App-header">
                <nav className={"Navbar"}>

                    <div className={"Navbar-home"}>
                        <a href={"#"}> Menu </a>
                    </div>

                    <ul className={"Navbar-items"}>
                        <li className={"active"}> <a href="#" > TODOList </a></li>
                        <li> <a href="#" > Button 2 </a></li>
                        <li> <a href="#" > Button 3 </a></li>
                        <li> <a href="#" > Button 4 </a></li>
                    </ul>
                </nav>
            </div>

            <div className="App-body">
                <div>
                    <input
                        type={"text"}
                        value={ newTodo }
                        onChange={ (e) =>setNewTodos(e.target.value)}
                    />
                    <button onClick={addTodo}> Ajouter une tache </button>
                </div>
                <div>
                    <ul>
                        {
                            todos.map( (todo) => {
                                return <li key={todo.id}>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={ () => toogleComplete(todo.id) }
                                    />

                                    <span style={ {textDecoration: todo.completed ? 'line-through' : 'none'}}>
                                        {todo.text}
                                    </span>
                                    <button onClick={ () => removeTodo(todo.id)}> Supprimer </button>
                                </li>
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
