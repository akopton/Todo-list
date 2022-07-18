import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            id: this.props.id,
            isDone: false,
        }

        this.handleChange = this.handleChange.bind(this)
        // this.markDone = this.markDone.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            value: e.target.value
        })
    }

    // markDone(itemid) {
    //     this.setState({
    //         isDone: true,
    //         classList: this.state.classList.concat("todo-item--done"),
    //     })
    // }
    

    render() {
        return (
            <li className={this.props.classList.join(' ')} key={this.state.id}>
                <input
                    className="todo-value"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={()=> {
                        if (this.state.value === '') this.props.handleDelete(this.state.id)
                    }}
                />
                <button className="todo-button todo-button--done" onClick={this.props.markDone}>v</button>
                <button className="todo-button todo-button--delete" onClick={this.props.handleDelete}>-</button>
                <div className="blur"></div>
            </li>
        )
    }
}

export default Todo;