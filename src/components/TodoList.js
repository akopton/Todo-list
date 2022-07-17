import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <ul className="todo-list">
                {this.props.list.map(el => (
                    <Todo 
                        value={el.value}
                        key={el.id}
                        handleDelete={() => this.props.handleDelete(el.id)}
                    />
                ))}
            </ul>
        )
    }
}

export default TodoList;