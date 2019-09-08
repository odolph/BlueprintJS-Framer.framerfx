// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  animate: ControlDescription;
  defaultSelectedTabId: ControlDescription;
  id: ControlDescription;
  large: ControlDescription;
  renderActiveTabPanelOnly: ControlDescription;
  selectedTabId: ControlDescription;
  vertical: ControlDescription;
  className: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  animate: { title: "Animate", defaultValue: false, type: ControlType.Boolean },
  defaultSelectedTabId: {
    title: "DefaultSelectedTabId",
    defaultValue: "",
    type: ControlType.String
  },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  large: { title: "Large", defaultValue: false, type: ControlType.Boolean },
  renderActiveTabPanelOnly: {
    title: "RenderActiveTabPanelOnly",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selectedTabId: {
    title: "SelectedTabId",
    defaultValue: "",
    type: ControlType.String
  },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
