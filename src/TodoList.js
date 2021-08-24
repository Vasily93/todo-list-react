import React, {Component} from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {
    constructor() {
        super()
        this.status = {

        }
    }

    render() {
        return(
            <div>
            to do list
            <ToDo/>
            </div>
        )
    }
}

export default ToDoList;