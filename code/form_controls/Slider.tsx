import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Slider";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState";

const style: React.CSSProperties = {
  width: "100%",
  height: 40
};

const InnerSlider: React.SFC<any> = ({ value, ...props }) => {
  const [currentValue, setValue] = useManagedState(value);
  return (
    <System.Slider
      value={currentValue}
      style={style}
      onChange={e => setValue(e)}
      {...props}
    />
  );
};

export const Slider = withHOC(InnerSlider);

Slider.defaultProps = {
  width: 150,
  height: 40
};

addPropertyControls(Slider, {
  value: merge(controls.value, {}),
  disabled: merge(controls.disabled, {}),
  labelPrecision: merge(controls.labelPrecision, {
    defaultValue: 0,
    displayStepper: true
  }),
  max: merge(controls.max, { defaultValue: 10, displayStepper: true }),
  min: merge(controls.min, { defaultValue: 0, displayStepper: true }),
  stepSize: merge(controls.stepSize, { defaultValue: 1, displayStepper: true }),
  vertical: merge(controls.vertical, {})
});
