import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/H3";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH3: React.SFC = props => {
  return <System.H3 {...props} style={style} />;
};

export const H3 = withHOC(InnerH3);

H3.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(H3, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
