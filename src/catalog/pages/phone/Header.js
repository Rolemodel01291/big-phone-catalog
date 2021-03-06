import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Typography } from "@material-ui/core";

const Header = (props) => {
  const addedItems = useSelector((state) => state.catalog.addedItems);

  return (
    <div className="my-12 flex">
      <div className=" flex w-2/12"></div>
      <div className=" flex w-8/12 justify-center">
        <Typography style={{ fontSize: "4rem" }}>{props.title}</Typography>
      </div>
      <div className=" flex w-2/12 justify-center">
        {addedItems === 0 ? (
          <AddShoppingCartIcon style={{ fontSize: "4rem" }} />
        ) : (
          <Link to={`/checkout`}>
            <Badge badgeContent={addedItems} color="error">
              <AddShoppingCartIcon style={{ fontSize: "4rem" }} />
            </Badge>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
