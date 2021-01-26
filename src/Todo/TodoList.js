import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import {List} from 'antd'

const styles1 = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <List styles={styles1.ul} grid={{column: 1}} dataSource={props.todos} renderItem={(item, index) => (
            <List.Item>
                <TodoItem todo={item} key={item.id} index={index} onChange={props.onToggle}/>
            </List.Item>
        )}/>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList