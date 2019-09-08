import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Menu";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMenu: React.SFC = props => {
  return <System.Menu {...props} style={style} />;
};

export const Menu = withHOC(InnerMenu);

Menu.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Menu, {
  large: merge(controls.large, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
