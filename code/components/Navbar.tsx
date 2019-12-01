import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Navbar";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNavbar: React.SFC = props => {
  return <System.Navbar {...props} style={style} />;
};

export const Navbar = withHOC(InnerNavbar);

Navbar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Navbar, {
  fixedToTop: merge(controls.fixedToTop, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
