import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import Header from "./Header";
import axios from 'axios';
import PopupView from "./PopUpView";

class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      popupViewShow: false,
      id: 0,
      user: ""
    };
  }

  componentDidMount() {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
            .then(response => {
                console.log(response)
                this.setState({coins: response.data})
            })

        
    }

  
  render() {
    let popupViewClose = () => {
        this.setState({ popupViewShow: false });
      };
    
      const {coins} = this.state
      const symbols = ['btc', 'eth', 'xrp', 'yfi', 
                  "crv", "dai", "snx", "ada", 
                  "chainlink", "bnb"];

                  

    return (
      <React.Fragment>
          <Header></Header>
          <br/>
          <br/>
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {
                  symbols.map(
                    symbol => coins.filter(coin => coin.symbol == symbol).map(filteredCoins => (
                      <tr>
                        <td>{filteredCoins.id}</td>
                        <td>{filteredCoins.symbol}</td>
                        <td>{filteredCoins.name}</td>
                        <td><Button onClick={() => this.setState({ id: filteredCoins.id, popupViewShow: true  })
                            }>Details</Button></td>
                            
                        
                      </tr>
                  ))
                  )
                }
                
              </tbody>
            </Table>
            <PopupView
                          show={this.state.popupViewShow}
                          onHide={popupViewClose}
                          popupid={this.state.id}
            />
          </div>
      </React.Fragment>
    );
  }
}

export default Coin;