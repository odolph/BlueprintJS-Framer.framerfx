import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/NavbarDivider";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNavbarDivider: React.SFC = props => {
  return <System.NavbarDivider {...props} style={style} />;
};

export const NavbarDivider = withHOC(InnerNavbarDivider);

NavbarDivider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NavbarDivider, {
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
