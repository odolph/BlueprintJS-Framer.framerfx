import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/TextArea";
import { withHOC } from "../withHOC";
import { useManagedState } from "../utils/useManagedState";

const InnerTextArea: React.SFC<any> = ({ value, ...props}) => {
  const [currentValue, setValue] = useManagedState(value)
  return <System.TextArea value={currentValue} onChange={e => setValue(e.target["value"])} {...props} />;
};

export const TextArea = withHOC(InnerTextArea);

TextArea.defaultProps = {
  width: 300,
  height: 150
};

addPropertyControls(TextArea, {
  large: merge(controls.large, {}),
  fill: merge(controls.fill, { defaultValue: "default"}),
  growVertically: merge(controls.growVertically, {}),
  intent: merge(controls.intent, {}),
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, { defaultValue: "Placeholder!"}),
});
