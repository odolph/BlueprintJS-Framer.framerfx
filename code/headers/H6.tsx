import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/H6";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH6: React.SFC = props => {
  return <System.H6 {...props} style={style} />;
};

export const H6 = withHOC(InnerH6);

H6.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(H6, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
