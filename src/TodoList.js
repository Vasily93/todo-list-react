import React, {Component} from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';
import { v4 as uuidv4 } from 'uuid';



class ToDoList extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
        this.addToDo = this.addToDo.bind(this)
        this.removeToDo = this.removeToDo.bind(this)
        this.updateToDo = this.updateToDo.bind(this)
    }

    addToDo(todo) {
        todo.id = uuidv4()
        this.setState({ todos: [...this.state.todos, todo]})
    }

    updateToDo(todo) {
        const updatedList = this.state.todos.map(t => {
            if(t.id === todo.id) {
                t.name = todo.name
            }
            return t;
        })

        this.setState({todos: updatedList})
    }

    removeToDo(evt) {
        const updatedList = this.state.todos.filter(todo => todo.id !== evt.target.id)
        this.setState({todos: updatedList})
    }

    render() {
        return(
            <div>
                <NewToDoForm addToDo={this.addToDo}/>

                <ul>
                    {this.state.todos.map(todo => (
                        <li key={todo.id}>
                        <ToDo todo={todo} updateToDo={this.updateToDo}/>
                        <button id={todo.id} onClick={this.removeToDo}>X</button>
                        </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ToDoList;