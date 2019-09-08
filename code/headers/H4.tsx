import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/H4";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH4: React.SFC = props => {
  return <System.H4 {...props} style={style} />;
};

export const H4 = withHOC(InnerH4);

H4.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(H4, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
