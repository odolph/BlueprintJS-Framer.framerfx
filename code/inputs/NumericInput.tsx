import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/NumericInput";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNumericInput: React.SFC = props => {
  return <System.NumericInput {...props} style={style} />;
};

export const NumericInput = withHOC(InnerNumericInput);

NumericInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NumericInput, {
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  max: merge(controls.max, {}),
  min: merge(controls.min, {}),
  placeholder: merge(controls.placeholder, {}),
  value: merge(controls.value, {}),
  className: merge(controls.className, {}),
  allowNumericCharactersOnly: merge(controls.allowNumericCharactersOnly, {}),
  buttonPosition: merge(controls.buttonPosition, {}),
  clampValueOnBlur: merge(controls.clampValueOnBlur, {}),
  fill: merge(controls.fill, {}),
  large: merge(controls.large, {}),
  leftIcon: merge(controls.leftIcon, {}),
  majorStepSize: merge(controls.majorStepSize, {}),
  minorStepSize: merge(controls.minorStepSize, {}),
  selectAllOnFocus: merge(controls.selectAllOnFocus, {}),
  selectAllOnIncrement: merge(controls.selectAllOnIncrement, {}),
  stepSize: merge(controls.stepSize, {}),
  intent: merge(controls.intent, {})
});