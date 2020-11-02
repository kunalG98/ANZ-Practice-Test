import React, { Component } from 'react'
import { Navbar, Card, Button, Row, Col } from "react-bootstrap";


class Login extends Component {
    constructor(props) {
        super(props);
        // this.onSubmit = this.onSubmit.bind(this);
        // this.onChange = this.onChange.bind(this);
        this.state = {
            value: ""
        }
    }

     handleChange = async (event) =>{
        await this.setState({value: [event.target.value]});
        // this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.value)
        localStorage.setItem('data', this.state.value);
      };


      onSubmit(event) {
        event.preventDefault();
        // var name = this.state.name;
        // localStorage.setItem('myData', true)
        // this.props.history.push("/coininfo");
        
      }

      

    
    render() {
        
        return (
            <div style={{  height: "100%" }}>
                
                <Row style={{marginTop: "30vh"}}>
                    <Col sm></Col>
                    <Col>
                    
                        <form onSubmit={this.onSubmit}>
                            <center>
                        <Card style={{ backgroundColor: "#e6cb83" }}>
                            <Card.Body>
                                <Card.Title>User Login</Card.Title>
                                
                                <Card.Text>
                                    <label>
                                        Name
                                        <input style={{marginLeft: "5vw"}} value={this.state.value} type="text" name="name"  onChange={this.handleChange} />
                                    </label>
                                    <br/>
                                    <Button type="submit" href="/coininfo" value="Submit" variant="warning">Login</Button>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        </center>
                            
                            </form>
                    </Col>
                    <Col sm></Col>
                
                
                </Row>
                
            </div>
        )
    }
}

export default Login;