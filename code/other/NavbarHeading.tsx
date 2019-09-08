import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/NavbarHeading";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNavbarHeading: React.SFC = props => {
  return <System.NavbarHeading {...props} style={style} />;
};

export const NavbarHeading = withHOC(InnerNavbarHeading);

NavbarHeading.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NavbarHeading, {
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
