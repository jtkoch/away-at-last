import React from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  return (
    <Container className="contact" maxWidth='md'>
    
      <Form name="contact-form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact-form" />
        <Form.Group>
          <Form.Label className="label">Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="label">Email:</Form.Label>
          <Form.Control type="text" placeholder="Enter your email" name="email" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="label">Message:</Form.Label>
          <Form.Control type="text" as="textarea" placeholder="Enter your message" name="message" rows={5} />
        </Form.Group>
        <Button type="submit" variant="outline-primary">Submit</Button>
      </Form>

    </Container>
  )
}

export default Contact
