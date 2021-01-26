import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, Col, Input, Row} from 'antd'

function AddTodo({onCreate}){
    const [value, setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return(
        <form style={{marginBottom:'1rem'}} onSubmit={submitHandler}>
            <Row>
                <Col span={17} style={{marginRight: '0.4vw'}}>
                    <Input htmlType={'input'} value={value} onChange={event => setValue(event.target.value)} />
                </Col>
                <Col span={3}>
                    <Button htmlType='submit'>Add Todo</Button>
                </Col>
            </Row>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo