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

    handleSubtmit(e) {
        e.preventDefault()

        const obj = {
            value: this.state.value,
            id: Date.now()
        }

        if (this.state.value !== '') {
            this.setState({
                list: this.state.list.concat(obj),
                value: ''
            })
        } else return
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
                    <input
                        className="todo-add"
                        type="submit"
                        value="+"
                        onClick={this.handleSubtmit}
                    />
                </form>
                {/* <TodoList /> */}
            </div>
        )
    }
}

export default TodoForm;