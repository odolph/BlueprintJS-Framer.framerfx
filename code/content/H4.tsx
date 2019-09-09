import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/H4";
import { withHOC } from "../withHOC";
import {
  TextPropertyControl,
  ColorPropertyControl
} from "../utils/PropertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH4: React.SFC<any> = ({
  text,
  ["children"]: _,
  willChangeTransform: __,
  ...props
}) => {
  return <System.H4 {...props}>{text}</System.H4>;
};

export const H4 = withHOC(InnerH4);

H4.defaultProps = {
  width: 360,
  height: 200
};

addPropertyControls(H4, {
  ...TextPropertyControl,
  ...ColorPropertyControl
});
