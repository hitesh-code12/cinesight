import React, { Component } from 'react'

 class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Hitesh"
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log("get derived")
    }
  render() {
    return (
      <div>Lifecycle</div>
    )
  }
}

export default Lifecycle