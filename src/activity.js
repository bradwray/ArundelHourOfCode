import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275,
    width: "80%",
    marginLeft: "10%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    marginLeft: "70%"
  }
};

const handleClick = url => {
  window.location.assign(url);
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" />
          Code Combat
          <Typography className={classes.pos} color="textSecondary">
            basic math skills
          </Typography>
          <Typography component="p">
            Practice your abilities at writing and executing algorithms
            (instruction sets) to guide your player on a quest through a
            dungeon.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() =>
              handleClick("https://codecombat.com/play/game-dev-hoc")
            }
            size="small"
          >
            Get coding!
          </Button>
        </CardActions>
      </Card>
      <br />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" />
          Code HS - Graphics
          <Typography className={classes.pos} color="textSecondary">
            intermediate math skills
          </Typography>
          <Typography component="p">
            Use what you know about x and y coordinates to draw graphics with a
            computerized "turtle."
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() =>
              handleClick(
                "https://www.codehs.com/editor/hoc/video/1064850/6642/4751?"
              )
            }
            size="small"
          >
            Get coding!
          </Button>
        </CardActions>
      </Card>
      <br />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" />
          Code HS - Mathematical Models
          <Typography className={classes.pos} color="textSecondary">
            advanced math skills
          </Typography>
          <Typography component="p">
            Use your knowledge of linear and non-linear equations to learn/tweak
            code to draw graphs.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() =>
              handleClick(
                "https://codehs.com/editor/hoc/video/1065330/6645/4753?"
              )
            }
            size="small"
          >
            Get coding!
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
