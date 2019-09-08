// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  animate: ControlDescription;
  stripes: ControlDescription;
  value: ControlDescription;
  className: ControlDescription;
  intent: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  animate: { title: "Animate", defaultValue: false, type: ControlType.Boolean },
  stripes: { title: "Stripes", defaultValue: false, type: ControlType.Boolean },
  value: { title: "Value", type: ControlType.Number },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  intent: {
    title: "Intent",
    options: ["none", "primary", "success", "warning", "danger"],
    optionTitles: ["None", "Primary", "Success", "Warning", "Danger"],
    defaultValue: "none",
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
