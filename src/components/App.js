import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class App extends Component {
  constructor () {
    super()
    this.state = { gifts: [] }
  }

  addGift = () => {
    const { gifts } = this.state
    const maxId = Math.max(...gifts.map(v=>v.id))
    const id = gifts.length!==0? maxId:0
    gifts.push({ id : id + 1})
  }

  render () {
    return (
      <div>
        <h2>Gift Giver</h2>
        <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}

export default App
