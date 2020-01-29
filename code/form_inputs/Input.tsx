import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/InputGroup";
import { withHOC } from "../withHOC";
import { iconPropertyControl } from "../utils/iconPropertyControl";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerInput: React.SFC = props => {
  return (
  <div className="bp3-input-group">
      <input class="bp3-input" type="text" disabled={props.disabled} placeholder={props.placeholder} />
  </div>
  );
};

export const Input = withHOC(InnerInput);

Input.defaultProps = {
  width: 150,
  height: 30
};

addPropertyControls(Input, {
  disabled: merge(controls.disabled, {}),
  placeholder: merge(controls.placeholder, {defaultValue: "Placeholder..."}),
});
