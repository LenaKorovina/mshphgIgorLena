import React from 'react';
import List from './List';


import Button from '@material-ui/core/Button'

class Homepage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            showModal:false,
/*events:[]*/
        }
    }

    handleModal(){
        this.setState({...this.state, showModal: !this.state.showModal})
    }

    handleSubmit(){
        //request to server send
    }

    render(){
        return(
            <div>
                {this.state.showModal ? <List closeModal={this.handleModal.bind(this)} submitForm={this.handleSubmit.bind(this)}/> : ''}
                <Button onClick={this.handleModal.bind(this)}>Open Modal</Button>

            </div>
        )
    }
}
export default Homepage;