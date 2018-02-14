import React, {Component} from 'react'
import Choices from './choices'
import Carousel from './carousel'
import {Navbar, NavbarBrand} from 'reactstrap'
import Logo from '../images/Logo.svg'
import Twitter from '../images/twitter.svg'
import Gplus from '../images/gplus.svg'
import Pinterest from '../images/pinterest.svg'
import Facebook from '../images/facebook.svg'
import Youtube from '../images/youtube.svg'
import axios from 'axios'
import '../../style/style.css'

class App extends Component {
  state = {clicked: false, data: {}}

// clicked provides a boolean value on whether to display the carousel or initial two options
// between laptops and health categories



// the two click functions are passed down as callback functions to the options component
// so when either is clicked it will trigger the fetch action to the api, and add that data
// to the main App state to pass down to the carousel
  onLaptopClick = () => {
    var self = this
    axios.get('https://api.bestbuy.com/beta/products/mostViewed(categoryId=abcat0502000)?apiKey=5BiWCOslni8v6Gp8GF5prh77')
    .then( response => {
      self.setState({clicked: true, data: response.data})
    })
  }

  onNutraClick = () => {
    var self = this
    axios.get('https://api.bestbuy.com/beta/products/mostViewed(categoryId=pcmcat242800050021)?apiKey=5BiWCOslni8v6Gp8GF5prh77')
    .then( response => {
      self.setState({clicked: true, data: response.data})
    })
  }

//based on whether or not an option has been clicked, the carousel or initial choices are displayed
  renderChoices = () => {
    if (this.state.clicked) {
      return <Carousel data={this.state.data} />
    } else {
      return <Choices onLaptopClick={this.onLaptopClick.bind(this)} onNutraClick={this.onNutraClick.bind(this)} />
    }
  }


//navbar is set up here but could be cleaned up to its own component if the application was larger
  render() {
    return (
      <div>
        <Navbar className='navcolor'>
         <NavbarBrand href="/"><img src={Logo} /></NavbarBrand>
         <div className='social-icons'>
           <img src={Facebook} />
           <img src={Twitter} />
           <img src={Pinterest} />
           <img src={Gplus} />
           <img src={Youtube} />
         </div>
       </Navbar>
       {this.renderChoices()}
      </div>
    )
  }
}

export default App
