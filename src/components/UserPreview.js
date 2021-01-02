import React from "react";
import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Avatar from "@material-ui/core/Avatar";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import CancelIcon from "@material-ui/icons/Cancel";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
  },
  avatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 130,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 35,
    width: 35,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <div style={{ display: "inline-block" }}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="subtitle1" color="textPrimary">
              홍길
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              010-3453-2324
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="previous">
              <AddCircleIcon />
            </IconButton>
            <IconButton aria-label="previous">
              <CreditCardIcon />
            </IconButton>
            <IconButton aria-label="previous">
              <CancelIcon />
            </IconButton>
          </div>
        </div>
        <Avatar
          className={classes.avatar}
          alt="Remy Sharp"
          src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        />
        {/* <CardMedia
          className={classes.cover}
          image="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
          title="Live from space album cover"
        /> */}
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MediaControlCard />, rootElement);
