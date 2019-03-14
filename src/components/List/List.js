import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import './Listcss.css';
import CheckboxSelectComponent from "./CheckboxSelectComponent";
import {requestCreateEvent} from "../../services/requests";
/* import {requestCreateEvent} from 'src/components/services/requests'*/

import img from './pexels-photo-286625.jpeg'
const baseUrl = "https://mishpahug-java221-team-a.herokuapp.com";
const email = "vasya@gmail.com";
const password = "00000000";




function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}



const styles = theme => {
    return ({
        paper: {
            position: 'absolute',
            width: theme.spacing.unit * 50,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing.unit * 4,
            outline: 'none',
        },
    });
};


class SimpleModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            event: {}
        }
    }

    handleChange = (e) => {
        this.state.event[e.target.name] =  e.target.value
        this.setState(this.state)
    };

    handleSubmit = async () => {
        const response = await requestCreateEvent (this.state.event);
        console.log(response)
    };

    render() {
        const {classes} = this.props;
        return (

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.showModal}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <Card className={classes.card}>

                        <CardActionArea>
                            {/*<CardMedia*/}
                            {/*component="img"*/}
                            {/*alt="alter text"*/}
                            {/*className={classes.media}*/}
                            {/*/* img src={blurMain} alt='ew'*/}
                            {/*height="140"*/}
                            {/*/>*/}

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <h2>testh2</h2>
                                </Typography>
                                <form>
                                    <img src={img} className='imglist'/>
                                    <input required type='title' name='title' placeholder='title' onChange={this.handleChange}/>
                                    <input required onChange={this.handleChange} type='text' name='holiday'
                                           placeholder='holiday'/>
                                    <input type='text' name='city' onChange={this.handleChange} />
                                    <input name='place_id' type='text' onChange={this.handleChange} />
                                    <input type='text' name='lat' onChange={this.handleChange} />
                                    <input name='lng' type='text' onChange={this.handleChange} />
                                    <input onChange={this.handleChange} type='text' name='confession'
                                           placeholder='confession'/>
                                    <input onChange={this.handleChange} type='date' name='date' placeholder='date'/>
                                    <input onChange={this.handleChange} type='time' name='time' placeholder='time'/>
                                    <input onChange={this.handleChange} type='number' name='duration'
                                           placeholder='duration'/>
                                    <CheckboxSelectComponent ref='food' name='food' selectName="food"
                                                             items="vegetarian kosher non-vegetarian other"/>


                                    <input onChange={this.handleChange} type='text' name='description'
                                           placeholder='description'/>
                                </form>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" onClick={this.props.submitForm}>
                                Join Event
                            </Button>
                            <Button size="small" color="primary" onClick={this.props.closeModal}>
                                Cancel
                            </Button>
                        </CardActions>
                    </Card>
                    {/* <SimpleModalWrapped/>*/}
                </div>
            </Modal>

        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;



/*
как сделать картинку фоном листа
как сделать так что б оно не двигалось при каждом вводе в поля
как оставлять после ввода в все поля */
