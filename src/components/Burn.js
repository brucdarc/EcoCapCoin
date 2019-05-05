import React, { Component } from "react";
import web3 from "../web3"
import {Card, Form} from "semantic-ui-react";
import EcoCapCoin from "../EcoCapCoin";

class Burn extends Component{

    constructor(props){
        super(props);
        this.state={
            location : "",
            capacity: 0
        };

    }

    setLocCap = async event =>{
        console.log("EYYYYYY");
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            await EcoCapCoin.methods
                .registerLocation(this.state.location, this.state.capacity) // contains the user account name
                .send({
                    from: accounts[0]
                });
            this.setState({
            });
        } catch (err) {
            console.log("ERROR IN SENDING TO CHAIN " + err);
            this.setState({
            });
        }
    }

    render() {
        return(
            <div>
                <h4>Burn Tokens</h4>
                <Form.Field >
                    <input
                        style={{width:'80%'}}
                        placeholder="Number of Permits to Destroy"
                        onChange={event =>
                            this.setState({
                                location: event.target.value
                            })
                        }
                    />
                </Form.Field>
                <br/>
                <h4 style={{ color: 'red', margin: 0  }}>   Permits will be permanently destroyed</h4>
                <button id={'setLocation'} className={'btn btn-md btn-success'} style={{color:'white'}} onClick={this.setLocCap}>
                    <span>Burn Permits</span>
                </button>
            </div>
        )
    }
};
export default Burn;