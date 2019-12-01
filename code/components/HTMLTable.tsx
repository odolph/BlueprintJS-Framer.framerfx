import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/HTMLTable";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerHTMLTable: React.SFC = props => {
  return <System.HTMLTable {...props} style={style} />;
};

export const HTMLTable = withHOC(InnerHTMLTable);

HTMLTable.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(HTMLTable, {
  bordered: merge(controls.bordered, {}),
  condensed: merge(controls.condensed, {}),
  interactive: merge(controls.interactive, {}),
  small: merge(controls.small, {}),
  striped: merge(controls.striped, {}),
  placeholder: merge(controls.placeholder, {})
});
