import React, { Component } from 'react'
import {Media, Card, CardImg,CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap'
export default class MenuComponent extends Component {
    constructor(props)
    {
        super(props);
    }

   
  render() {
      const menu=this.props.dishes.map(dish=>{
          return(
              <div key={dish.id} className="col-12 col-md-5 m-5 container">
                <Card style={{cursor:'pointer'}} onClick={()=>this.props.onClick(dish.id)}>
                        <CardImg src={dish.image} alt={dish.name} width="400px" height="500px"/>
                    <CardImgOverlay>
                        <CardTitle style={{fontWeight:'bold', color:'white', fontSize:'2rem'}}>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
          )
      })
    return (
      <div className="container">
        <div className="row">
                {menu}
        </div>
      </div>
    )
  }
}
