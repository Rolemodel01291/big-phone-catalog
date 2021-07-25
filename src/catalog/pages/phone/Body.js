import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import PhoneItem from "../../components/phoneItem";
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
  const phonesCheckList = useSelector((state) => state.catalog.phonesCheckList); //checkListitems
  const phonesList = useSelector((state) => state.catalog.phonesList);

  useEffect(() => {
    dispatch(loadPhoneData(page));
  }, [dispatch]);

  const addItem = (item) => {
    dispatch(addPhone2Cart(phonesCheckList, item));
    dispatch(setTotalCount());
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
          className="w-2/12 flex items-center justify-center"
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
        <div className="w-8/12">
          <div className="grid lg:grid-flow-row md:grid-flow-row sm:grid-flow-row lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-20 sm:gap-4 justify-center lg:w-1/1 md:w-1/1 sm:w-4/4 m-auto">
            {phonesList.map((item, index) => (
              <PhoneItem
                item={item}
                index={(page - 1) * 10 + index + 1}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="w-2/12 flex items-center justify-center" style={{ cursor: "pointer" }}>
          {page === parseInt(Math.ceil(count_total / 10)) ? (
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
