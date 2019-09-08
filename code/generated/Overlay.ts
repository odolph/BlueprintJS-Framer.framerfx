// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  isOpen: ControlDescription;
  transitionName: ControlDescription;
  autoFocus: ControlDescription;
  canEscapeKeyClose: ControlDescription;
  enforceFocus: ControlDescription;
  lazy: ControlDescription;
  transitionDuration: ControlDescription;
  usePortal: ControlDescription;
  portalClassName: ControlDescription;
  backdropClassName: ControlDescription;
  canOutsideClickClose: ControlDescription;
  hasBackdrop: ControlDescription;
  className: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  transitionName: {
    title: "TransitionName",
    defaultValue: "",
    type: ControlType.String
  },
  autoFocus: {
    title: "AutoFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  canEscapeKeyClose: {
    title: "CanEscapeKeyClose",
    defaultValue: false,
    type: ControlType.Boolean
  },
  enforceFocus: {
    title: "EnforceFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  lazy: { title: "Lazy", defaultValue: false, type: ControlType.Boolean },
  transitionDuration: { title: "TransitionDuration", type: ControlType.Number },
  usePortal: {
    title: "UsePortal",
    defaultValue: false,
    type: ControlType.Boolean
  },
  portalClassName: {
    title: "PortalClassName",
    defaultValue: "",
    type: ControlType.String
  },
  backdropClassName: {
    title: "BackdropClassName",
    defaultValue: "",
    type: ControlType.String
  },
  canOutsideClickClose: {
    title: "CanOutsideClickClose",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasBackdrop: {
    title: "HasBackdrop",
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
