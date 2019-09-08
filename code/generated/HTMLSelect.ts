// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  disabled: ControlDescription;
  fill: ControlDescription;
  large: ControlDescription;
  minimal: ControlDescription;
  value: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  fill: { title: "Fill", defaultValue: false, type: ControlType.Boolean },
  large: { title: "Large", defaultValue: false, type: ControlType.Boolean },
  minimal: { title: "Minimal", defaultValue: false, type: ControlType.Boolean },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
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
