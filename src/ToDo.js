import React, {Component} from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props)
        this.status = {

        }
    }

    render() {
        console.log(this.props.todo)
        return(
            <li key={this.props.id}>
            {this.props.todo.name} 
            </li>
        )
    }
}

export default ToDo;