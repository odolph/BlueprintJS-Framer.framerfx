import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Divider";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDivider: React.SFC = props => {
  return <System.Divider {...props} style={style} />;
};

export const Divider = withHOC(InnerDivider);

Divider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Divider, {
  tagName: merge(controls.tagName, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
