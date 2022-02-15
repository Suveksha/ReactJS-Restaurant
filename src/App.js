import 'react-devtools';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import MenuComponent from './components/MenuComponent';
import {DISHES} from './shared/dishes.js';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    }
  }

  render(){
    return (
      <div>
          <Navbar dark color="dark">
          <div className="container">
              <NavbarBrand href="#">Coursera Application</NavbarBrand>
          </div>
          </Navbar>
          <MenuComponent dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
