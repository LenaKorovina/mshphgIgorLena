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

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});
class SimpleModal extends React.Component {



    render() {
        const { classes } = this.props;
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={ this.props.showModal }
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="alter text"
                                    className={classes.media}
                                    height="140"

                                    title="title"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <input ref='title' type='title' name='title'/>
                                    </Typography>
                                    <Typography component="p">
                                         <form>

                                            <input ref='holiday' type='text' name='holiday'/>
                                            <input ref='address' type='address' name='address'/>

                                            <input ref='city' type='text' name='city'/>
                                            <input ref='date' type='date' name='date'/>
                                            <input ref='time'type='time' name='time'/>




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
                        {/* <SimpleModalWrapped/> */}
                    </div>
                </Modal>
            </div>
        );
    }
}

// SimpleModal.propTypes = {
//     classes: PropTypes.object.isRequired,
//     showModal: PropTypes.bool
// };


const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;