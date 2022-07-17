import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <li className="todo-item" key=''>
                <button className="todo-delete">delete</button>
            </li>
        )
    }
}

export default Todo;