import * as System from "@blueprintjs/core";
import { addPropertyControls } from "framer";
import * as React from "react";
import { controls, merge } from "../generated/MultiSlider";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMultiSlider: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = useManagedState(value);
  return (
    <System.MultiSlider
      onChange={value => setValue(value)}
      value={currentValue}
      style={style}
      {...props}
    />
  );
};

export const MultiSlider = withHOC(InnerMultiSlider);

MultiSlider.defaultProps = {
  width: 150,
  height: 50,
  value: [2, 6]
};

addPropertyControls(MultiSlider, {
  defaultTrackIntent: merge(controls.defaultTrackIntent, {}),
  disabled: merge(controls.disabled, {}),
  labelStepSize: merge(controls.labelStepSize, {
    defaultValue: 1,
    displayStepper: true
  }),
  showTrackFill: merge(controls.showTrackFill, {}),
  labelPrecision: merge(controls.labelPrecision, {
    defaultValue: 0,
    displayStepper: true
  }),
  max: merge(controls.max, { defaultValue: 10, displayStepper: true }),
  min: merge(controls.min, { defaultValue: 0, displayStepper: true }),
  stepSize: merge(controls.stepSize, { defaultValue: 1, displayStepper: true }),
  vertical: merge(controls.vertical, {})
});
