import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            id: this.props.id
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <li className="todo-item" key={this.state.id}>
                <input
                    className=""
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button className="todo-delete" onClick={this.props.handleDelete}>-</button>
            </li>
        )
    }
}

export default Todo;