import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/RadioGroup";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerRadioGroup: React.SFC = props => {
  return <System.RadioGroup {...props} style={style} />;
};

export const RadioGroup = withHOC(InnerRadioGroup);

RadioGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RadioGroup, {
  disabled: merge(controls.disabled, {}),
  inline: merge(controls.inline, {}),
  label: merge(controls.label, {}),
  name: merge(controls.name, {}),
  selectedValue: merge(controls.selectedValue, {}),
  className: merge(controls.className, {})
});
