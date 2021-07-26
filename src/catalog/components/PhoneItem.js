import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: 270,
    boxShadow: "1.5px 1.5px #888888",
  },
});

const PhoneItem = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    item: {},
    id: 1,
  });

  useEffect(() => {
    setState({ ...state, item: props.item, id: props.index });
  }, [props]);

  const addItem = () => {
    const arr = { ...state.item, id: state.id };
    props.addItem(arr);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        component="img"
        image="/phone.png"
        title="phone"
        style={{ margin: "auto", width: "50%", marginTop: "5px" }}
      />
      <hr style={{ marginTop: "10px" }} />
      <CardContent style={{ textAlign: "center" }}>
        <Typography className="font-sans text-xl">
          {state.item.brand}
        </Typography>
      </CardContent>
      <CardActions className="justify-center">
        <Button
          className="justify-start"
          size="medium"
          color="primary"
          onClick={addItem}
        >
          Add
        </Button>
        <Typography className="justify-end">
          {`$${state.item.price}`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default PhoneItem;
