import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ButtonGroup";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerButtonGroup: React.SFC = props => {
  return <System.ButtonGroup {...props} style={style} />;
};

export const ButtonGroup = withHOC(InnerButtonGroup);

ButtonGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ButtonGroup, {
  alignText: merge(controls.alignText, {}),
  fill: merge(controls.fill, {}),
  minimal: merge(controls.minimal, {}),
  large: merge(controls.large, {}),
  vertical: merge(controls.vertical, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
