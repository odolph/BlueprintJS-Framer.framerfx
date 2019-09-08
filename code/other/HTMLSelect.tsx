import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/HTMLSelect";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerHTMLSelect: React.SFC = props => {
  return <System.HTMLSelect {...props} style={style} />;
};

export const HTMLSelect = withHOC(InnerHTMLSelect);

HTMLSelect.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(HTMLSelect, {
  disabled: merge(controls.disabled, {}),
  fill: merge(controls.fill, {}),
  large: merge(controls.large, {}),
  minimal: merge(controls.minimal, {}),
  value: merge(controls.value, {}),
  placeholder: merge(controls.placeholder, {})
});
