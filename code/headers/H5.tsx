import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/H5";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH5: React.SFC = props => {
  return <System.H5 {...props} style={style} />;
};

export const H5 = withHOC(InnerH5);

H5.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(H5, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
