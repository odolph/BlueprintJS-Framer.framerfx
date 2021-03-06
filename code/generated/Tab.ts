// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  children: ControlDescription;
  disabled: ControlDescription;
  id: ControlDescription;
  panelClassName: ControlDescription;
  title: ControlDescription;
  className: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  panelClassName: {
    title: "PanelClassName",
    defaultValue: "",
    type: ControlType.String
  },
  title: { title: "Title", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
