import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, addPropertyControls } from "framer";
import { controls, merge } from "../generated/H5";
import { withHOC } from "../withHOC";
import {
  TextPropertyControl,
  ColorPropertyControl
} from "../utils/PropertyControls";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerH5: React.SFC<any> = ({
  text,
  ["children"]: _,
  willChangeTransform: __,
  ...props
}) => {
  return <System.H5 {...props}>{text}</System.H5>;
};

export const H5 = withHOC(InnerH5);

H5.defaultProps = {
  width: 360,
  height: 200
};

addPropertyControls(H5, {
  ...TextPropertyControl,
  ...ColorPropertyControl
});
