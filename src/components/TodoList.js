import React from "react";

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
                {/* 
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                 */}
            </ul>
        )
    }
}

export default TodoList;