import React, {Component} from 'react'
import Hp from '../images/hp.jpeg'
import Nutra from '../images/nutra.jpg'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/fontawesome-free-regular'
import {Container, Row, Col} from 'reactstrap'
import he from 'he'

class Carousel extends Component {
  state = {counter: 1}


//these two click functions keep track of position of the 5 items in the carousel
  leftClick = () => {
    if(this.state.counter === 1) {
      this.setState({counter: 5})
    } else {
      this.setState({counter: this.state.counter - 1})
    }
  }

  rightClick = () => {
    if(this.state.counter === 5) {
      this.setState({counter: 1})
    } else {
      this.setState({counter: this.state.counter + 1})
    }
  }

  render() {
    //this is used to shorten the title which is very long 
    let title = this.props.data.results[this.state.counter].names.title
    let firstHyphen = title.indexOf('-');
    let secondHyphen = title.indexOf('-', firstHyphen+1)

    return (
      <Container>
        <Row>
          <Col className='item-title'>
            <span>{title.substring(0, secondHyphen)}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <div className='arrow-button' onClick={() => this.leftClick()}>
              <FontAwesomeIcon size="6x" icon={faCaretSquareLeft} />
            </div>
          </Col>
          <Col xs={{ size: 4, offset: 1 }}>
            <div className='choice-image'>
              <img className='image-responsive' src={this.props.data.results[this.state.counter].images.standard} />
            </div>
          </Col>
          <Col xs={{ size: 4 }}>
            <div className='choice-text'>
              <h1>${this.props.data.results[this.state.counter].prices.current}</h1>
              <p>{he.decode(this.props.data.results[this.state.counter].descriptions.short)}</p>
            </div>
            <div className='shop-button'>
              <a href={this.props.data.results[this.state.counter].links.web} target='_blank'>
                SHOP NOW
              </a>
            </div>
          </Col>
          <Col xs={{ size: 1, offset: 1 }} >
            <div className='arrow-button' onClick={() => this.rightClick()}>
              <FontAwesomeIcon size="6x" icon={faCaretSquareRight} />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Carousel
