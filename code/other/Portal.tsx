import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Portal";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPortal: React.SFC = props => {
  return <System.Portal {...props} style={style} />;
};

export const Portal = withHOC(InnerPortal);

Portal.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Portal, {
  className: merge(controls.className, {})
});
