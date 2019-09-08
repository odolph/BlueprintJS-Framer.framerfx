// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  defaultTrackIntent: ControlDescription;
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
  defaultTrackIntent: {
    title: "DefaultTrackIntent",
    options: ["none", "primary", "success", "warning", "danger"],
    optionTitles: ["None", "Primary", "Success", "Warning", "Danger"],
    defaultValue: "none",
    type: ControlType.Enum
  },
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
