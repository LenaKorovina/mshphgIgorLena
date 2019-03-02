import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../node_modules/@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {

        maxWidth: 345,
    },
    media: {

        objectFit: 'cover',
    },
};

function ImgMediaCard(props) {
    const { classes } = props;
    return (
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
                       h2h2h2h2h2
                    </Typography>
                    <Typography component="p">
                      <form>  <input type='text' name='city'/>
                      <input type='text' name='holidays' />
                        <input type='date' value='date'/>

                      </form>

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
