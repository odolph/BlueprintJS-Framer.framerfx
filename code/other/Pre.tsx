import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Pre";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPre: React.SFC = props => {
  return <System.Pre {...props} style={style} />;
};

export const Pre = withHOC(InnerPre);

Pre.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Pre, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
