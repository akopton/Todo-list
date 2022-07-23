import React from "react";
import {FaCheck, FaTrashAlt} from 'react-icons/fa';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            id: this.props.id,
            isDone: false,
            list: this.props.list
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(e) {
    //     e.preventDefault()
    //     this.setState({
    //         value: e.target.value
    //     })
    // }

    render() {
        return (
            <li className={this.props.classList} key={this.state.id}>
                    {/* <input
                        className="todo-value"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    /> */}
                <div className="todo-value">{this.state.value}</div>
                <button className="todo-button todo-button--done" onClick={this.props.markDone}><FaCheck className="check-icon icon"/></button>
                <button className="todo-button todo-button--delete" onClick={this.props.handleDelete}><FaTrashAlt className="delete-icon icon"/></button>
                <div className="blur"></div>
            </li>
        )
    }
}

export default Todo;