import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/H2";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH2: React.SFC = props => {
  return <System.H2 {...props} style={style} />;
};

export const H2 = withHOC(InnerH2);

H2.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(H2, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
