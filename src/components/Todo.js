import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            id: this.props.id,
            bgColor: ''
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
                    className="todo-value"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={()=> {
                        if (this.state.value === '') this.props.handleDelete(this.state.id)
                    }}
                />
                <button className="todo-delete" onClick={this.props.handleDelete}>-</button>
            </li>
        )
    }
}

export default Todo;