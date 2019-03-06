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

let user = JSON.stringify({

    "title":title,
    "holiday":holiday,
    "address": {
    "city": city,
        "place_id":place_id,
        "location":   {
        "lat":lat,
            "lng":lng
    }
},
    "confession": confession,
    "date":date,
    "time":time,
    "duration":duration,
    "food":["[String]", "[String]"],
    "description": "[String]"

});

let token = btoa(email+":"+password);
let init = {
    method: 'POST',
    body : user,
    headers: {
        'Content-Type' : 'application/json',
        authorization: token
    }
};
fetch(`${baseUrl}/event/creation`, init).then(function (responce) {
    return responce.json();
}).then(function (data) {
    for (const p in data) {
        console.log(p + " : " + data[p]);}
});





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


const baseUrl = "https://mishpahug-java221-team-a.herokuapp.com";
const email = "vasya@gmail.com";
const password = "00000000";

    let title = this.refs.title.value;
    let holiday = this.refs.holiday.value;
    let address = this.refs.address.value;
    let city = this.refs.city.value;
    let place_id=this.refs.place_id.value;
    let location=this.refs.location.value;
    let lat=this.refs.lat.value;
    let lng=this.refs.lng.value;
    let confession=this.refs.confession.value;
    let date=this.refs.date.value;
    let time=this.refs.time.value;
    let duration =this.refs.duration.value;
    let food = this.refs.food.value;
    let description = this.refs.food.value;



class SimpleModal extends React.Component {





    render() {
        const {classes} = this.props;
        return (
            <div>
                <Modal>
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.showModal}

                    <div style={getModalStyle()} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="alter text"
                                    className={classes.media}
                                    /* img src={blurMain} alt='ew'*/
                                    height="140"


                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        hphphphphp
                                    </Typography>
                                    <Typography component="p">
                                        <form>
                                            <div><input required ref='title' type='title' name='title'
                                                        placeholder='title'/></div>
                                            <div><input required ref='holiday' type='text' name='holiday'
                                                        placeholder='holiday'/></div>
                                            <select ref='address'>
                                                <option ref='city' type='text' name='city'>city</option>
                                                <option ref='place_id'>placeId</option>
                                                <select ref='location'>
                                                    <option value='lat'>lat</option>
                                                    <option value='lng'>lng</option>
                                                </select>
                                            </select>
                                            <div><input ref='confession' type='text' name='confession' placeholder='confession'/></div>
                                            <div><input ref='date' type='date' name='date' placeholder='date'/></div>
                                            <div><input ref='time' type='time' name='time' placeholder='time'/></div>
                                            <div><input ref='duration' type='number' name='duration' placeholder='duration'/></div>
                                            <div>
                                                <CheckboxSelectComponent ref='food' name='food' selectName="food"
                                                                         items="vegetarian kosher non-vegetarian other"/>

                                            </div>
                                            <div><input ref='description' type='text' name='description' placeholder='description'/></div>



                                        </form>
                                    </Typography>
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
                         <SimpleModalWrapped/>


                >
    </div>





// SimpleModal.propTypes = {
   classes: PropTypes.object.isRequired,
     showModal: PropTypes.bool
 };



const SimpleModalWrapped = withStyles(styles)(SimpleModal);

                    export default SimpleModalWrapped;
