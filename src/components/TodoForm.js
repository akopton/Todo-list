import React from "react";
import TodoList from "./TodoList";

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
        this.markDone = this.markDone.bind(this)
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
            id: Date.now(),
            isDone: false,
            classList: ['todo-item']
        }

        if (this.state.value !== '') {
            this.setState({
                list: this.state.list.concat(obj),
                value: ''
            })
        } else return
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleDelete(item) {
        this.setState({
            list: [...this.state.list].filter(el => el.id !== item.id)
        })
    }

    markDone(item) {
        this.setState({
            list: [...this.state.list].map(el => (el.id == item.id && el.isDone === false) ? {...el, isDone: true,classList: ['todo-item', 'todo-item--done'].join(' ')} : {...el, isDone: false})
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
                    markDone={this.markDone}
                />
            </div>
        )
    }
}

export default TodoForm;