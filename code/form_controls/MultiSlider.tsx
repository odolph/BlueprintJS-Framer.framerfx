import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/MultiSlider";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMultiSlider: React.SFC<any> = ({ ...props}) => {
  return <System.MultiSlider style={style} {...props} />
};

export const MultiSlider = withHOC(InnerMultiSlider);

MultiSlider.defaultProps = {
  width: 150,
  height: 50,
  value: [2,4,6,8],
};

addPropertyControls(MultiSlider, {
  defaultTrackIntent: merge(controls.defaultTrackIntent, {}),
  disabled: merge(controls.disabled, {}),
  labelStepSize: merge(controls.labelStepSize, {defaultValue: 1, displayStepper: true }),
  showTrackFill: merge(controls.showTrackFill, {}),
  labelPrecision: merge(controls.labelPrecision, { defaultValue: 0, displayStepper: true }),
  max: merge(controls.max, { defaultValue: 10, displayStepper: true }),
  min: merge(controls.min, { defaultValue: 0, displayStepper: true }),
  stepSize: merge(controls.stepSize, { defaultValue: 1, displayStepper: true }),
  vertical: merge(controls.vertical, {}),
});
