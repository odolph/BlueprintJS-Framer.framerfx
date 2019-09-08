import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/UL";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerUL: React.SFC = props => {
  return <System.UL {...props} style={style} />;
};

export const UL = withHOC(InnerUL);

UL.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(UL, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
