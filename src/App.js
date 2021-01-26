import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'
import './App.css'
import 'antd/dist/antd.css'
import {Tooltip, Layout} from 'antd'
import moment from 'moment'

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: true, title: 'Купить хлеб',
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            )
        },
        {
            id: 2, completed: false, title: 'Купить масло',
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            )
        },
        {
            id: 3, completed: false, title: 'Купить козьи каки',
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            )
        }
    ])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            id: Date.now(),
            completed: false,
            title,
            datetime: (
                <Tooltip title={moment().subtract(0, 'seconds').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(0, 'seconds').fromNow()}</span>
                </Tooltip>
            )
        }]))
    }

    return (
        <Layout className="site-layout-background" style={{minHeight: '52vw'}}>
            <Context.Provider value={{removeTodo}}>
                <div className="wrapper">
                    <h1>React learning</h1>
                    <AddTodo onCreate={addTodo}/>
                    <TodoList todos={todos} onToggle={toggleTodo}/>
                </div>
            </Context.Provider>
        </Layout>
    )
}

export default App
