import React, { Component } from 'react'
import './Style/HStyle.css'
export class Header extends Component {
  render() {
    return (
      <div>
       <h1 style={{color:'white'}}> this is my header component</h1>
       <p className='item'>Lorem ipsum dolor sit amet.</p>
      </div>
    )
  }
}

export default Header
