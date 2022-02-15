import React, { Component } from 'react'
import {Media, Card, CardImg,CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap'

export default class DishDetail extends Component {
    constructor(props)
    {
        super(props);
        console.log(props)
    }
    hello()
    {
      console.log(this.props.dish)
    }
  render() {
    this.hello()
    if(this.props.dish)
    {
      console.log("Almost there")
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
      else
      return(
        <div></div>
      )
  }
}
