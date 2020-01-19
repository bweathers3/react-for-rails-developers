import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      course_modules: [
        { id: 1, title: '1. test 1', description: 'loreum ipsum', active: false },
        { id: 2, title: '2. test 2', description: 'loreum ipsum', active: false },
        { id: 3, title: '3. test 3', description: 'loreum ipsum', active: false },
        { id: 4, title: '4. test 4', description: 'loreum ipsum', active: false }
      ]
    }
  }

handleVideoChange(item, event){
  //pass in item to be modified and event itself
  event.preventDefault()

  let course_modules = [...this.state.course_modules]

  course_modules.map( data => {
    data.active = false
  })

  item.active = !item.active

  course_modules[item.id - 1] = item

  this.setState({course_modules})

  //console.log(course_modules)
}


  render() {
    return (
      <div>
        <Jumbotron/>
        <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/>
        // passing the handleVideoChange into table
      </div>
    )
  }
}

export default Home
