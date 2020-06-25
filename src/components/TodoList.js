import React from 'react'
import Todo from './Todo'
import Input from './Input'
import { connect } from 'react-redux'

class TodoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        return (
            <div className="">
                <Input
                    handleChange={this.handleChange}
                    title={this.state.title}
                />
                <Todo />
            </div>
        )
    }
}
export default connect(null, null)(TodoList)