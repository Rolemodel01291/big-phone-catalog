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
  media: {
    width: "50%",
    height: "50%",
    margin: "auto",
    marginTop: "5px",
  },
});

const CheckoutItem = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    item: {},
  });

  useEffect(() => {
    setState({ ...state, item: props.item });
  }, [props]);

  const removeItem = () => {
    const id = state.item.id;
    props.removeItem(id);
  };

  return (
    <div className="w-full my-12 flex align-center cursor-pointer justify-between">
      <div className="flex w-4/12 items-center justify-center flex-col">
        <div className="w-full lg:max-w-full flex justify-center items-center gap-y-px">
          <img
            src="../phone.png" className="w-1/2 h-3/4 md:w-12/12 md:h-12/12 sm:w-12/12 md:h-12/12"
            alt={state.item.brand}
          />
        </div>
        <div className="w-full lg:max-w-full flex md:w-1/2 md:flex justify-center items-center">
          <Button onClick={removeItem} className="w-1/2"><p class="text-xs">Remove</p></Button>
        </div>
      </div>

      <div className="flex w-4/12 items-center justify-center lg:text-lg md:text-xs sm:text-xs">{`$${state.item.price}`}</div>
      <div className="flex w-4/12 items-center justify-center lg:text-lg sm:text-xs md:text-xs">{state.item.count}</div>
    </div>
  );
};

export default CheckoutItem;
