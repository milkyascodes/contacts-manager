import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form } from 'semantic-ui-react'
import Title from '../components/Title'

function AddContact() {
    return (
        <Container id="form-container">
            <Title/>
            <Form>
                
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <br/>
                <Button type='submit'>Submit</Button>
            </Form>
            
        </Container>
    )
}

export default AddContact
