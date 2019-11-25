import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Label";
import { withHOC } from "../withHOC";
import {
  TextPropertyControl,
  ColorPropertyControl,
  UseGlobalStatePropertyControls
} from "../utils/PropertyControls";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { compose } from "../utils/compose";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerLabel: React.SFC<any> = ({
  text,
  ["children"]: _,
  willChangeTransform: __,
  ...props
}) => {
  return <System.Label {...props}>{text}</System.Label>;
};

export const Label = compose(
  withHOC,
  withManagedState
)(InnerLabel);

Label.defaultProps = {
  width: 150,
  height: 25,
  valuePropName: "text"
};

addPropertyControls(Label, {
  ...TextPropertyControl,
  ...ColorPropertyControl,
  ...UseGlobalStatePropertyControls
});
