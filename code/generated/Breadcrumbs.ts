// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  collapseFrom: ControlDescription;
  minVisibleItems: ControlDescription;
  className: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  collapseFrom: {
    title: "CollapseFrom",
    options: ["start", "end"],
    optionTitles: ["Start", "End"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  minVisibleItems: { title: "MinVisibleItems", type: ControlType.Number },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
