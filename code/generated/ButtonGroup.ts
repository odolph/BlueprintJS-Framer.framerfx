// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  alignText: ControlDescription;
  fill: ControlDescription;
  minimal: ControlDescription;
  large: ControlDescription;
  vertical: ControlDescription;
  className: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  alignText: {
    title: "AlignText",
    options: ["left", "right", "center"],
    optionTitles: ["Left", "Right", "Center"],
    defaultValue: "left",
    type: ControlType.Enum
  },
  fill: { title: "Fill", defaultValue: false, type: ControlType.Boolean },
  minimal: { title: "Minimal", defaultValue: false, type: ControlType.Boolean },
  large: { title: "Large", defaultValue: false, type: ControlType.Boolean },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
