import clsx from "clsx";
import React from "react";

function Button({}) {
  const classes = clsx("btn", {});
  return <button type="button" className={classes}></button>;
}

export default Button;
