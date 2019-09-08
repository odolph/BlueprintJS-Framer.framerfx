// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  bordered: ControlDescription;
  condensed: ControlDescription;
  interactive: ControlDescription;
  small: ControlDescription;
  striped: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  bordered: {
    title: "Bordered",
    defaultValue: false,
    type: ControlType.Boolean
  },
  condensed: {
    title: "Condensed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  interactive: {
    title: "Interactive",
    defaultValue: false,
    type: ControlType.Boolean
  },
  small: { title: "Small", defaultValue: false, type: ControlType.Boolean },
  striped: { title: "Striped", defaultValue: false, type: ControlType.Boolean },
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
