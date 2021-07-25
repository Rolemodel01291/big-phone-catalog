import React, { useEffect } from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import CheckoutItem from "../../components/checkoutItem";
import { loadCheckoutData, removeItemFromCart } from "../../catalogSlice";
import HeaderBar from "./HeaderBar";

const Body = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const checkoutPage = useSelector((state) => state.catalog.checkoutPage); //checkout page
  const phonesCheckList = useSelector((state) => state.catalog.phonesCheckList); //checkListitems
  const outputCheckoutList = useSelector(
    (state) => state.catalog.outputCheckoutList
  );

  useEffect(() => {
    dispatch(loadCheckoutData(phonesCheckList, checkoutPage));
  }, [phonesCheckList]);

  const removeItem = (id) => {
    dispatch(removeItemFromCart(phonesCheckList, id));
  };

  const redirect = () => {
    history.push("/");
  };

  const handleNext = () => {
    dispatch(loadCheckoutData(phonesCheckList, checkoutPage + 1));
  };

  const handlePrevious = () => {
    dispatch(loadCheckoutData(phonesCheckList, checkoutPage - 1));
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex items-center" style={{ cursor: "pointer" }}>
          {checkoutPage === 1 ? (
            <></>
          ) : (
            <ArrowUpwardIcon
              style={{ fontSize: "4rem", marginBottom: '5px' }}
              onClick={handlePrevious}
            />
          )}
        </div>
        <div className="flex grid lg:grid-flow-row md:grid-flow-row sm:grid-flow-row lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 md:gap-4 justify-center lg:w-1/2 md:w-3/4 sm:w-4/4">
          <HeaderBar />
          {outputCheckoutList.map((item, index) => (
            <>
              <CheckoutItem item={item} removeItem={removeItem} />
              <hr />
            </>
          ))}
        </div>
        <div className="flex items-center" style={{ cursor: "pointer" }}>
          {checkoutPage === parseInt(Math.ceil(phonesCheckList.length / 3)) ? (
            <></>
          ) : (
            <ArrowDownwardIcon
              style={{ fontSize: "4rem", marginTop: '5px' }}
              onClick={handleNext}
            />
          )}
        </div>
        <div className="flex items-center mt-10" style={{ cursor: "pointer" }}>
          <Button
            className="justify-start"
            size="large"
            color="primary"
            style={{ fontSize: "3rem" }}
            onClick={redirect}
          >
            Pay
          </Button>
        </div>
      </div>
    </>
  );
};

export default Body;
