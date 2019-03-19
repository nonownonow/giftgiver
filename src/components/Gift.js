import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class Gift extends Component {
  constructor () {
    super()
    this.state = {
      person: '',
      present: ''
    }
  }

  render () {
    return (
      <div className="gift">
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className='input-person'
              onChange={event => this.setState({ person: event.target.value })}
            >
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              className='input-gift'
              onChange={event => this.setState({ present: event.target.value })}
            >
            </FormControl>
          </FormGroup>
          <Button className='remove-btn' onClick={()=>this.props.removeGift(this.props.gift.id)}>remove</Button>
        </Form>
        {/*<input className='input-person' onChange={event => this.setState({ person: event.target.value })}/>*/}
      </div>
    )
  }
}

export default Gift
