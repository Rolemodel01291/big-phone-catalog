import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import PhoneItem from "../../components/PhoneItem";
import {
  loadPhoneData,
  addPhone2Cart,
  setTotalCount,
  setAddedItems,
} from "../../catalogSlice";

const Body = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.catalog.page);
  const count_total = useSelector((state) => state.catalog.count_total);
  const phonesList = useSelector((state) => state.catalog.phonesList);

  useEffect(() => {
    dispatch(loadPhoneData(page));
  }, [dispatch]);

  const addItem = (item) => {
    dispatch(addPhone2Cart(item));
    dispatch(setTotalCount());
    dispatch(setAddedItems());
  };

  const handlePrevious = () => {
    dispatch(loadPhoneData(page - 1));
  };

  const handleNext = () => {
    dispatch(loadPhoneData(page + 1));
  };

  return (
    <>
      <div className="flex">
        <div
          className="w-1/12 flex items-center justify-end"
          style={{ cursor: "pointer" }}
        >
          {page === 1 ? (
            <></>
          ) : (
            <ArrowBackIcon
              style={{ fontSize: "50px" }}
              onClick={handlePrevious}
            />
          )}
        </div>
        <div className="w-10/12">
          <div className="grid grid-flow-row md:grid-flow-row sm:grid-flow-row grid-cols-5 md:grid-cols-5 sm:grid-cols-2 gap-20 sm:gap-4 justify-center">
            {phonesList.map((item, index) => (
              <PhoneItem
                item = {item}
                index = {(page - 1) * 10 + index + 1}
                addItem = {addItem}
              />
            ))}
          </div>
        </div>
        <div className="w-1/12 flex items-center" style={{ cursor: "pointer" }}>
          {page === Math.floor(count_total / 50) + 1 ? (
            <></>
          ) : (
            <ArrowForwardIcon
              style={{ fontSize: "50px" }}
              onClick={handleNext}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
