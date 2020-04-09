
import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

class AddDetails extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      salary: '',
      age: ''
    }
    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    return(
      <div>
        <h2>Add New Employee</h2>
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="EmployeeName">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control
                  type="text"
                  name="EmployeeName"
                  value={this.state.EmployeeName}
                  onChange={this.handleChange}
                  placeholder="Employee Name"/>
              </Form.Group>
              <Form.Group controlId="Salary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="text"
                  name="Salary"
                  value={this.state.Salary}
                  onChange={this.handleChange}
                  placeholder="Salary" />
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  placeholder="Age" />
              </Form.Group>
              <Form.Group>
                <Button variant="success" type="submit">Save</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddDetails;

