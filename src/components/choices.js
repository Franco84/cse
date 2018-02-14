import React, {Component} from 'react'
import Hp from '../images/hp.jpeg'
import Nutra from '../images/nutra.jpg'
import {Container, Row, Col} from 'reactstrap'

class Choices extends Component {

  render() {
    return (
      <Container>
        <Row className='boxRow'>
          <Col xs={{ size: 4, offset: 2 }}>
            <div onClick={this.props.onLaptopClick} className='boxChoice'>
              <img src={Hp} />
            </div>
          </Col>
          <Col xs={{ size: 4 }}>
            <div onClick={this.props.onNutraClick} className='boxChoice'>
              <img src={Nutra} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 12 }}>
            <p>Click to choose</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Choices
