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
    }

    addToDo(todo) {
        todo.id = uuidv4()
        this.setState({ todos: [...this.state.todos, todo]})
    }

    render() {
        return(
            <div>
                <NewToDoForm addToDo={this.addToDo}/>

                <ul>
                    {this.state.todos.map(todo => <ToDo todo={todo}/>)}
                </ul>
            </div>
        )
    }
}

export default ToDoList;