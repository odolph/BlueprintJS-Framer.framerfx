import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/RangeSlider";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerRangeSlider: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = useManagedState(value);
  return (
    <System.RangeSlider
      onChange={value => setValue(value)}
      value={currentValue}
      style={style}
      {...props}
    />
  );
};

export const RangeSlider = withHOC(InnerRangeSlider);

RangeSlider.defaultProps = {
  width: 150,
  height: 50,
  value: [2,7]
};

addPropertyControls(RangeSlider, {
  disabled: merge(controls.disabled, {}),
  labelStepSize: merge(controls.labelStepSize, {
    defaultValue: 1,
    displayStepper: true
  }),
  showTrackFill: merge(controls.showTrackFill, { defaultValue: true }),
  labelPrecision: merge(controls.labelPrecision, {
    defaultValue: 0,
    displayStepper: true
  }),
  max: merge(controls.max, { defaultValue: 10, displayStepper: true }),
  min: merge(controls.min, { defaultValue: 0, displayStepper: true }),
  stepSize: merge(controls.stepSize, { defaultValue: 1, displayStepper: true }),
  vertical: merge(controls.vertical, {})
});
