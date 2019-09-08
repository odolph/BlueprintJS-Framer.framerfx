// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  autoFocus: ControlDescription;
  canEscapeKeyClear: ControlDescription;
  usePortal: ControlDescription;
  position: ControlDescription;
  className: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  autoFocus: {
    title: "AutoFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  canEscapeKeyClear: {
    title: "CanEscapeKeyClear",
    defaultValue: false,
    type: ControlType.Boolean
  },
  usePortal: {
    title: "UsePortal",
    defaultValue: false,
    type: ControlType.Boolean
  },
  position: {
    title: "Position",
    options: [
      "bottom",
      "top",
      "bottom-left",
      "bottom-right",
      "top-left",
      "top-right"
    ],
    optionTitles: [
      "Bottom",
      "Top",
      "Bottom-left",
      "Bottom-right",
      "Top-left",
      "Top-right"
    ],
    defaultValue: "bottom",
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
