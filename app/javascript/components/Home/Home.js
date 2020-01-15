import React, { Component } from 'react'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      course_modules: [
        { id: 1, title: '', description: 'loreum ipsum', active: false },
        { id: 2, title: '', description: '', active: false },
        { id: 3, title: '', description: '', active: false },
        { id: 4, title: '', description: '', active: false },
      ]
    }
  }

  render() {
    return (
      <div>This is our Home component.</div>
    )
  }
}

export default Home
