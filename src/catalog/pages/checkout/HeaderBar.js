import React from "react";

const HeaderBar = () => {
  return (
    <div className="w-full my-12 flex align-center cursor-pointer justify-between">
      <div className="flex w-4/12 items-center justify-center flex-col">
        <p className="w-full lg:max-w-full flex justify-center text-lg">
          Item
        </p>
      </div>

      <p className="flex w-4/12 items-center justify-center text-lg mx-5">
        Cost
      </p>
      <p className="flex w-4/12 items-center justify-center text-lg">
        Count
      </p>
    </div>
  );
};

export default HeaderBar;
