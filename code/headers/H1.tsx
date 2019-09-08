import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/H1";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH1: React.SFC = props => {
  return <System.H1 {...props} style={style} />;
};

export const H1 = withHOC(InnerH1);

H1.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(H1, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
