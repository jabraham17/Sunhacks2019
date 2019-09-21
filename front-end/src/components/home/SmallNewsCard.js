import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 165,
    minWidth: 165,
    margin: "5px",
    minHeight: 200,
    maxHeight: 200
  },
  media: {
    height: 40,
    background: "linear-gradient(to bottom left, #66ffff, #cc66ff )"
  }
});

export default function SmallNewsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h6">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
