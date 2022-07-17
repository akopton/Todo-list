import React from "react";
import TodoList from "./TodoList";
import {useEffect} from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: []
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        const savedTodos = localStorage.getItem('todos')
        if (savedTodos) {
            this.setState({
                list: JSON.parse(savedTodos)
            })
        } else return []
    }

    componentDidUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.state.list))
    }

    handleSubmit(e) {
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

    handleChange(e) {
        e.preventDefault()
        this.setState({
            value: e.target.value
        })
    }

    handleDelete(itemid) {
        this.setState({
            list: [...this.state.list].filter(el => el.id !== itemid)
        })
    }

    render() {
        return (
            <div className="todo-form-wrap">
                <form className="todo-form">
                    <input
                        className="todo-input"
                        type="text"
                        placeholder="Add new todo..."
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <input
                        className="todo-add"
                        type="submit"
                        value="Add"
                        onClick={this.handleSubmit}
                    />
                </form>
                <TodoList
                    list={this.state.list}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default TodoForm;