import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/InputGroup";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerInputGroup: React.SFC = props => {
  return <System.InputGroup {...props} style={style} />;
};

export const InputGroup = withHOC(InnerInputGroup);

InputGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(InputGroup, {
  disabled: merge(controls.disabled, {}),
  fill: merge(controls.fill, {}),
  leftIcon: merge(controls.leftIcon, {}),
  large: merge(controls.large, {}),
  small: merge(controls.small, {}),
  placeholder: merge(controls.placeholder, {}),
  round: merge(controls.round, {}),
  type: merge(controls.type, {}),
  value: merge(controls.value, {}),
  intent: merge(controls.intent, {}),
  className: merge(controls.className, {}),
  checked: merge(controls.checked, {})
});
