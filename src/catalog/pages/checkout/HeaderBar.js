import React from "react";

const HeaderBar = () => {
  return (
    <div className="w-full my-12 flex align-center cursor-pointer justify-between">
      <div className="flex w-4/12 items-center justify-center flex-col">
        <div className="w-full lg:max-w-full flex justify-center lg:text-lg md:text-sm sm:text-xs">
          Item
        </div>
      </div>

      <div className="flex w-4/12 items-center justify-center lg:text-lg md:text-sm sm:text-xs">
        Price
      </div>
      <div className="flex w-4/12 items-center justify-center lg:text-lg md:text-sm sm:text-xs">
        Count
      </div>
    </div>
  );
};

export default HeaderBar;
