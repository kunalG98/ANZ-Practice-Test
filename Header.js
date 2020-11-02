import React, { Component } from "react";
import {  Navbar, Container} from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentWillMount() {
    this.state.user = localStorage.getItem('data');
  }

  
  render() {
      var {user} = this.state
    
    return (
      <React.Fragment>
       
        <div >
        
        <Navbar style={{width: "100%"}} bg="dark" variant="dark">
            <Navbar.Brand >
            
            Welcome {user}
            </Navbar.Brand>
        </Navbar>
          
        </div>
       
      </React.Fragment>
    );
  }
}

export default Header;
