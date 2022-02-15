import React, { Component } from 'react'
import {Media, Card, CardImg,CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap'

export default class SelectedDish extends Component {
    constructor(props)
    {
        super(props);
    }
  render() {
    return(
        <div className='container my-5' style={{width:'50%'}}>
            <Card>
            <CardImg src={this.props.dish.image} alt={this.props.dish.name} width="800px" height="600px"/>
            <CardImgOverlay><CardTitle style={{fontWeight:'bold', color:'white', fontSize:'2rem'}}>{this.props.dish.name}</CardTitle></CardImgOverlay>
            <CardBody>
                <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
  }
}
