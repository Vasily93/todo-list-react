import React, {Component} from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: this.props.todo,
            editing: false
        }
        this.editToDo = this.editToDo.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    editToDo() {
        this.setState(state => ({...state, editing: true}))
    }

    handleChange(evt) {
        this.setState(state => ({todo: {...state.todo, name: evt.target.value}}))
    }

    submitForm(evt) {
        evt.preventDefault()
        const newtodo = {
            name: this.state.todo.name,
            id: this.state.todo.id
        }
        this.props.updateToDo(newtodo)
        this.setState({editing: false})
    }

    render() {
        let todoThing = this.state.editing ? 
            <form onSubmit={this.submitForm}>
                <input onChange={this.handleChange} value={this.state.todo.name}></input>
                <button>Update</button>
            </form> : 
            <p>
                {this.state.todo.name} || <button onClick={this.editToDo}>Edit</button>
            </p>
        return(
            <div>
                {todoThing}
            </div>
        )
    }
}

export default ToDo;