// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  disabled: ControlDescription;
  fill: ControlDescription;
  hasSelection: ControlDescription;
  large: ControlDescription;
  text: ControlDescription;
  buttonText: ControlDescription;
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
  hasSelection: {
    title: "HasSelection",
    defaultValue: false,
    type: ControlType.Boolean
  },
  large: { title: "Large", defaultValue: false, type: ControlType.Boolean },
  text: { title: "Text", defaultValue: "", type: ControlType.String },
  buttonText: {
    title: "ButtonText",
    defaultValue: "",
    type: ControlType.String
  },
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
