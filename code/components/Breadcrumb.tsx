import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Breadcrumb";
import { withHOC } from "../withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBreadcrumb: React.SFC = props => {
  let text = props.text.map((item, index) => {
    return (
      <a id={index} href="javascript:void(0);">
        {item}
      </a>
    );
  });

  return (
    <System.Breadcrumb
      {...props}
      style={style}
      text={text}
    />
  );
};

export const Breadcrumb = withHOC(InnerBreadcrumb);

Breadcrumb.defaultProps = {
  width: 300,
  height: 50
};

addPropertyControls(Breadcrumb, {
  current: merge(controls.current, {}),
  disabled: merge(controls.disabled, {}),
  text: {
    type: ControlType.Array,
    title: "Text",
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["Parent Entity", "Parent Record Name"]
  }
});
