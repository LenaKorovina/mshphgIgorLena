import React from 'react';
import List from './List/List';
import Button from '@material-ui/core/Button'
import { requestCreateEvent } from '../services/requests';
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
        const res = await requestCreateEvent();
        if(res) {
            this.handleModal()
        }
        //request to server send
    }

    render(){
        return(
            <div className='footer' >
                <List showModal={this.state.showModal} closeModal={this.handleModal.bind(this)} submitForm={this.handleSubmit.bind(this)}/>
                <Button className='btn-block fontbtn'  onClick={this.handleModal.bind(this)}>Add Your Event</Button>
            </div>
        )
    }
}
export default Homepage;