import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Slider";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSlider: React.SFC = props => {
  return <System.Slider {...props} style={style} />;
};

export const Slider = withHOC(InnerSlider);

Slider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Slider, {
  initialValue: merge(controls.initialValue, {}),
  value: merge(controls.value, {}),
  disabled: merge(controls.disabled, {}),
  labelStepSize: merge(controls.labelStepSize, {}),
  labelPrecision: merge(controls.labelPrecision, {}),
  max: merge(controls.max, {}),
  min: merge(controls.min, {}),
  showTrackFill: merge(controls.showTrackFill, {}),
  stepSize: merge(controls.stepSize, {}),
  vertical: merge(controls.vertical, {}),
  className: merge(controls.className, {})
});
