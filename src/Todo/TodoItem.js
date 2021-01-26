import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import {Button, Checkbox, Comment, List, Row, Col} from 'antd'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%'
    },
    input: {
        marginRight: '1rem'
    },
    btn: {
        width: '1.2em',
        height: '1.2em'
    },
    date: {
        fontSize: '0.87em',
        color: 'grey'
    }
}

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    let classes = []
    if (todo.completed) {
        classes.push('done')
    }

    console.log('todo', todo)
    return (
        <div style={styles.li}>
            <Col>
                <Row>
                    <span className={classes.join(' ')}>
                        <Checkbox checked={todo.completed} style={styles.input} onChange={() => onChange(todo.id)}/>
                        <strong>{index + 1}.</strong>
                        &nbsp;
                        {todo.title}
                    </span>
                </Row>
                <Row>
                    <span style={styles.date}>
                        {todo.datetime}
                    </span>
                </Row>
            </Col>
            <Col>
                <Button danger type={'link'}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                   className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>}
                        onClick={removeTodo.bind(null, todo.id)}/>
            </Col>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem