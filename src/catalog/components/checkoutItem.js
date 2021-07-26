import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const CheckoutItem = (props) => {
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
    <div className="w-full flex align-center cursor-pointer justify-between">
      <div className="flex w-4/12 items-center justify-center flex-col">
        <div className="w-full flex justify-center items-center gap-y-px">
          <img
            src="../phone.png"
            alt={state.item.brand}
            style={{ minWidth: "50px", minHeight: "100px" }}
          />
        </div>
        <div className="w-full lg:max-w-full flex md:w-1/2 md:flex sm:w-1/3 w-1/3 justify-center items-center">
          <Button onClick={removeItem} className="w-1/2">
            <p className="text-sm">Remove</p>
          </Button>
        </div>
      </div>

      <p className="flex w-4/12 items-center justify-center text-lg mx-5">{`$${state.item.price}`}</p>
      <p className="flex w-4/12 items-center justify-center text-lg">
        {state.item.count}
      </p>
    </div>
  );
};

export default CheckoutItem;
