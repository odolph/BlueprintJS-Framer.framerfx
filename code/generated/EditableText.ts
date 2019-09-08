// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  confirmOnEnterKey: ControlDescription;
  defaultValue: ControlDescription;
  disabled: ControlDescription;
  isEditing: ControlDescription;
  maxLength: ControlDescription;
  minWidth: ControlDescription;
  multiline: ControlDescription;
  maxLines: ControlDescription;
  minLines: ControlDescription;
  placeholder: ControlDescription;
  selectAllOnFocus: ControlDescription;
  type: ControlDescription;
  value: ControlDescription;
  intent: ControlDescription;
  className: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  confirmOnEnterKey: {
    title: "ConfirmOnEnterKey",
    defaultValue: false,
    type: ControlType.Boolean
  },
  defaultValue: {
    title: "DefaultValue",
    defaultValue: "",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isEditing: {
    title: "IsEditing",
    defaultValue: false,
    type: ControlType.Boolean
  },
  maxLength: { title: "MaxLength", type: ControlType.Number },
  minWidth: { title: "MinWidth", type: ControlType.Number },
  multiline: {
    title: "Multiline",
    defaultValue: false,
    type: ControlType.Boolean
  },
  maxLines: { title: "MaxLines", type: ControlType.Number },
  minLines: { title: "MinLines", type: ControlType.Number },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  },
  selectAllOnFocus: {
    title: "SelectAllOnFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  type: { title: "Type", defaultValue: "", type: ControlType.String },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
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
