import React from 'react';
import List from '../List/List';
import Button from '@material-ui/core/Button'
import {requestYourIp} from "../../services/requests";
import './homepagecss.css';

class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showModal:false
        }
    }

    handleModal(){
        this.setState({...this.state, showModal: !this.state.showModal})
    }

    async handleSubmit(){
        const res = await requestYourIp();
        if(res) {
            this.handleModal()
        }
        //request to server send
    }

    render(){
        return(<div>


            <div >


                <List showModal={this.state.showModal} closeModal={this.handleModal.bind(this)} submitForm={this.handleSubmit.bind(this)}/>
                <Button  onClick={this.handleModal.bind(this)}>+</Button>
            </div>
            </div>
        )
    }
}
export default Homepage;