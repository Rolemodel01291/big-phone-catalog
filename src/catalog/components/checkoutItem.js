import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const CheckoutItem = (props) => {
  const [state, setState] = useState({
    item: {},
  });

  useEffect(() => {
    setState({ ...state, item: props.item });
  }, []);

  const removeItem = () => {
    const id = state.item.id;
    props.removeItem(id);
  };

  return (
    <div className="w-full flex align-center cursor-pointer justify-between">
      <div className="flex w-4/12 items-center justify-center flex-col">
        <div className="w-full lg:max-w-full flex justify-center items-center gap-y-px">
          <img
            src="../phone.png"
            className="w-1/4 h-2/3 md:w-12/12 md:h-12/12 sm:w-12/12 sm:h-12/12 w-2/2 h-2/2"
            alt={state.item.brand}
          />
        </div>
        <div className="w-full lg:max-w-full flex md:w-1/2 md:flex justify-center items-center">
          <Button onClick={removeItem} className="w-1/2">
            <p class="text-xs">Remove</p>
          </Button>
        </div>
      </div>

      <div className="flex w-4/12 items-center justify-center lg:text-lg md:text-xs sm:text-xs">{`$${state.item.price}`}</div>
      <div className="flex w-4/12 items-center justify-center lg:text-lg sm:text-xs md:text-xs">
        {state.item.count}
      </div>
    </div>
  );
};

export default CheckoutItem;
