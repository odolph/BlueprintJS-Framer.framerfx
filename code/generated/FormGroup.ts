// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  contentClassName: ControlDescription;
  disabled: ControlDescription;
  helperText: ControlDescription;
  inline: ControlDescription;
  label: ControlDescription;
  labelFor: ControlDescription;
  labelInfo: ControlDescription;
  intent: ControlDescription;
  className: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  contentClassName: {
    title: "ContentClassName",
    defaultValue: "",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  helperText: {
    title: "HelperText",
    defaultValue: "",
    type: ControlType.String
  },
  inline: { title: "Inline", defaultValue: false, type: ControlType.Boolean },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  labelFor: { title: "LabelFor", defaultValue: "", type: ControlType.String },
  labelInfo: { title: "LabelInfo", defaultValue: "", type: ControlType.String },
  intent: {
    title: "Intent",
    options: ["none", "primary", "success", "warning", "danger"],
    optionTitles: ["None", "Primary", "Success", "Warning", "Danger"],
    defaultValue: "none",
    type: ControlType.Enum
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
