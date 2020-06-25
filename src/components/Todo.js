import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../redux/actions'

const Todo = ({ todos, deleteTodo }) => {

    function deleteTargetTodo(e) {
        deleteTodo(e.target.id)
    }

    return (
        <div>
            {todos.length ?
                <div>
                    {
                        todos.map((item) =>
                            <div key={item.id}>
                                <label>
                                    {item.title}
                                </label>
                                <span id={item.id} onClick={deleteTargetTodo.bind(this)}>&times;</span>
                            </div>
                        )
                    }
                </div>
                :
                <small>У вас пока нет активныйх задач</small>}
        </div>
    )
}
const mapStateToProps = state => ({
    todos: state.todos.todos
})
const mapDispatchToProps = {
    deleteTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)