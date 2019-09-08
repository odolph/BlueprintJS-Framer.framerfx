import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/OL";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerOL: React.SFC = props => {
  return <System.OL {...props} style={style} />;
};

export const OL = withHOC(InnerOL);

OL.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(OL, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {})
});
