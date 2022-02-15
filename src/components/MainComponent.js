import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from './MenuComponent';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';

class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log('hello')
  }

  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">Coursera Application</NavbarBrand>
          </div>
        </Navbar>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
      </div>
    );
  }
}

export default MainComponent;