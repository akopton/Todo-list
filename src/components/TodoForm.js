import React from "react";
import TodoList from "./TodoList";

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: []
        }

        this.handleSubtmit = this.handleSubtmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleSubtmit() {

    }

    handleChange() {

    }

    handleDelete() {

    }

    render() {
        return (
            <div className="app-wrap">
                <form className="todo-form">
                    <input
                        className="todo-input"
                        type="text"
                        placeholder=""
                        value={this.state.value}
                        onChange={this.state.handleChange}
                    />
                </form>
                {/* <TodoList /> */}
            </div>
        )
    }
}

export default TodoForm;