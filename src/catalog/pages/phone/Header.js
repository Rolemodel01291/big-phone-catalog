import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Typography } from "@material-ui/core";

const Header = (props) => {
  const addedItems = useSelector((state) => state.catalog.addedItems);

  return (
    <div className="my-12 flex justify-between">
      <div></div>
      <div>
        <Typography style={{ fontSize: 20 }}>{props.title}</Typography>
      </div>
      <div>
        {addedItems === 0 ? (
          <AddShoppingCartIcon style={{ fontSize: 30 }} />
        ) : (
          <Link
            to={`/checkout`}
          >
            <Badge badgeContent={addedItems} color="error">
              <AddShoppingCartIcon
                style={{ fontSize: 30 }}
              />
            </Badge>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
