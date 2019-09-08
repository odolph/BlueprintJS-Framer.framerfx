import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Label";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerLabel: React.SFC = props => {
  return <System.Label {...props} style={style} />;
};

export const Label = withHOC(InnerLabel);

Label.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Label, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
