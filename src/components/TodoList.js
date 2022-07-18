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
                        list={this.props.list}
                        value={el.value}
                        key={el.id}
                        classList={el.classList}
                        handleDelete={() => this.props.handleDelete(el)}
                        markDone={() => this.props.markDone(el)}
                    />
                ))}
            </ul>
        )
    }
}

export default TodoList;