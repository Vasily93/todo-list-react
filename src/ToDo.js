import React, {Component} from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props)
        this.status = {

        }
    }

    render() {
        return(
            <p>{this.props.name}</p>
        )
    }
}

export default ToDo;