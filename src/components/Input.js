import React from 'react'
import { addTodo } from '../redux/actions'
import { connect } from 'react-redux'

const Input = ({ handleChange, title, addTodo }) => {

    function addNewTodo(e) {
        e.preventDefault()
        if (!title.trim()) {
            return console.log('empty')
        }
        let todo = {
            id: Date.now().toString(),
            title: title,
            completed: false
        }
        addTodo(todo)
    }

    return (
        <form className="input-group mb-3" onSubmit={addNewTodo.bind(this)}>
            <input
                type="text"
                className="form-control"
                value={title}
                onChange={handleChange}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">Button</button>
            </div>
        </form>
    )
}
const mapDispatchToProps = {
    addTodo
}
export default connect(null, mapDispatchToProps)(Input)