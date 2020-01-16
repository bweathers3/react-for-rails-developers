import React, { Component } from 'react'
import Jumbotron from './Jumbotron'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      course_modules: [
        { id: 1, title: '1. test 1', description: 'loreum ipsum', active: false },
        { id: 2, title: '2. test 2', description: 'loreum ipsum', active: false },
        { id: 3, title: '3. test 3', description: 'loreum ipsum', active: false },
        { id: 4, title: '4. test 4', description: 'loreum ipsum', active: false },
      ]
    }
  }

  render() {
    return (
      <div>
        <Jumbotron/>
      </div>  
    )
  }
}

export default Home
