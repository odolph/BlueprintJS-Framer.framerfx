import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Switch";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSwitch: React.SFC<any> = ({ checked,  ...props }) => {
  const [currentlyChecked, setChecked] = useManagedState (checked)
  return <System.Switch {...props} style={style} checked={currentlyChecked} onChange={e => setChecked(e.target["checked"])} />;
};

export const Switch = withHOC(InnerSwitch);

Switch.defaultProps = {
  width: 80,
  height: 20
};

addPropertyControls(Switch, {
  innerLabelChecked: merge(controls.innerLabelChecked, {}),
  innerLabel: merge(controls.innerLabel, {}),
  alignIndicator: merge(controls.alignIndicator, {}),
  checked: merge(controls.checked, {}),
  defaultChecked: merge(controls.defaultChecked, {}),
  disabled: merge(controls.disabled, {}),
  inline: merge(controls.inline, {}),
  label: merge(controls.label, {}),
  labelElement: merge(controls.labelElement, {}),
  large: merge(controls.large, {}),
});
