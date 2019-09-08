// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  disabled: ControlDescription;
  inline: ControlDescription;
  label: ControlDescription;
  name: ControlDescription;
  selectedValue: ControlDescription;
  className: ControlDescription;
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
  inline: { title: "Inline", defaultValue: false, type: ControlType.Boolean },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  selectedValue: {
    title: "SelectedValue",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
