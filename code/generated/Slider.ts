// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  initialValue: ControlDescription;
  value: ControlDescription;
  disabled: ControlDescription;
  labelStepSize: ControlDescription;
  labelPrecision: ControlDescription;
  max: ControlDescription;
  min: ControlDescription;
  showTrackFill: ControlDescription;
  stepSize: ControlDescription;
  vertical: ControlDescription;
  className: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  initialValue: { title: "InitialValue", type: ControlType.Number },
  value: { title: "Value", type: ControlType.Number },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  labelStepSize: { title: "LabelStepSize", type: ControlType.Number },
  labelPrecision: { title: "LabelPrecision", type: ControlType.Number },
  max: { title: "Max", type: ControlType.Number },
  min: { title: "Min", type: ControlType.Number },
  showTrackFill: {
    title: "ShowTrackFill",
    defaultValue: false,
    type: ControlType.Boolean
  },
  stepSize: { title: "StepSize", type: ControlType.Number },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
