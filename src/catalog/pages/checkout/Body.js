import React, { useState, useEffect } from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
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
      <div className="flex justify-center">
        <div className="grid grid-flow-col md:grid-flow-col sm:grid-flow-row grid-rows-3 md:grid-rows-3 sm:grid-rows-3 gap-10 sm:gap-4 justify-center">
          {phonesList.map((item, index) => (
            <PhoneItem
              item={item}
              index={(page - 1) * 10 + index + 1}
              addItem={addItem}
            />
          ))}
        </div>
        {/* <div className="flex items-center" style={{ cursor: "pointer" }}>
          {page === Math.floor(count_total / 50) + 1 ? (
            <></>
          ) : (
            <ArrowDownwardIcon
              style={{ fontSize: "50px" }}
              onClick={handleNext}
            />
          )}
        </div> */}
      </div>
    </>
  );
};

export default Body;
