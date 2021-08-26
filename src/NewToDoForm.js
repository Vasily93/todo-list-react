import React, {Component} from 'react';

class NewToDoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: {name: ''}
        }
        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    submitForm(evt) {
        evt.preventDefault()
        const newtodo = {
            name: this.state.todo.name,
        }
        this.props.addToDo(newtodo)
        this.setState({todo: {name: ''}})
    }

    handleChange(evt) {
        this.setState({todo: {name: evt.target.value}})
    }

    render() {
        return(
            <form onSubmit={this.submitForm}>
                {/* <label/> */}
                <input onChange={this.handleChange}  value={this.state.todo.name}/>
                <button>Add ToDo</button>
            </form>
        )
        
    }
}

export default NewToDoForm;