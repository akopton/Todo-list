import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            id: this.props.id,
            isDone: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.markDone = this.markDone.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            value: e.target.value
        })
    }

    markDone(itemid) {
        this.setState({
            isDone: true
        })
    }
    

    render() {
        return (
            <li className={this.state.isDone ? 'todo-item--done' : 'todo-item'} key={this.state.id}>
                <input
                    className="todo-value"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={()=> {
                        if (this.state.value === '') this.props.handleDelete(this.state.id)
                    }}
                />
                <button className="todo-done" onClick={this.markDone}>v</button>
                <button className="todo-delete" onClick={this.props.handleDelete}>-</button>
            </li>
        )
    }
}

export default Todo;