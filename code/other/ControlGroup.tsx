import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ControlGroup";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerControlGroup: React.SFC = props => {
  return <System.ControlGroup {...props} style={style} />;
};

export const ControlGroup = withHOC(InnerControlGroup);

ControlGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ControlGroup, {
  fill: merge(controls.fill, {}),
  vertical: merge(controls.vertical, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
