// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  fill: ControlDescription;
  large: ControlDescription;
  small: ControlDescription;
  growVertically: ControlDescription;
  intent: ControlDescription;
  className: ControlDescription;
  disabled: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  fill: { title: "Fill", defaultValue: false, type: ControlType.Boolean },
  large: { title: "Large", defaultValue: false, type: ControlType.Boolean },
  small: { title: "Small", defaultValue: false, type: ControlType.Boolean },
  growVertically: {
    title: "GrowVertically",
    defaultValue: false,
    type: ControlType.Boolean
  },
  intent: {
    title: "Intent",
    options: ["none", "primary", "success", "warning", "danger"],
    optionTitles: ["None", "Primary", "Success", "Warning", "Danger"],
    defaultValue: "none",
    type: ControlType.Enum
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
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
