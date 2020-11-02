import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Card, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export class PopUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filteredCoins: [],
        //NewID: filteredCoins
      
    };
  }

  componentDidMount() {
    const popupid = this.props.popupid;
    // console.log("ola");
    // console.log(popupid)
        axios.get('https://api.coingecko.com/api/v3/coins/'+popupid)
        .then(response => {
            console.log(response)
            this.setState({filteredCoins: response.data})
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.popupid !== prevState.popupid){
            const popupid = this.props.popupid;
            // console.log("ola");
            // console.log(popupid)
                axios.get('https://api.coingecko.com/api/v3/coins/'+popupid)
                .then(response => {
                    //console.log(response)
                    this.setState({filteredCoins: response.data})
                })
            }
        }
        

    
  render() {

    const {filteredCoins} = this.state;
    // console.log("ASD");
    // console.log(filteredCoins)
    
    return (
      <Modal {...this.props} size="lg" centered width="auto">
      
        <Modal.Header closeButton>
          <div className="container">
            <Row>
              <Col sm={4}>
               HI
              </Col>
              
            </Row>
          </div>
        </Modal.Header>

        <Modal.Body>
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Market Cap Rank</th>
                  <th>Market Data Current Price</th>
                  <th>Market Cap in USD</th>
                  <th>Fully Diluted Valuation in USD</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>{filteredCoins.id}</td>
                      <td>{filteredCoins.market_cap_rank}</td>
                    
                          {/* {this.props.popupid !== 0
                          &&
                                  <>
                                <td>{filteredCoins.market_data.current_price.usd}</td> 

                                <td>{filteredCoins.market_data.market_cap.usd}</td>
                                <td>{filteredCoins.fully_diluted_valuation}</td>
                               </>
                          
                            } */}
                          
                  </tr>
              </tbody>
            </Table>
        </Modal.Body>
        
      </Modal>
    );
  }
}

export default PopUpView;