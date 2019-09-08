import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/EditableText";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerEditableText: React.SFC = props => {
  return <System.EditableText {...props} style={style} />;
};

export const EditableText = withHOC(InnerEditableText);

EditableText.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(EditableText, {
  confirmOnEnterKey: merge(controls.confirmOnEnterKey, {}),
  defaultValue: merge(controls.defaultValue, {}),
  disabled: merge(controls.disabled, {}),
  isEditing: merge(controls.isEditing, {}),
  maxLength: merge(controls.maxLength, {}),
  minWidth: merge(controls.minWidth, {}),
  multiline: merge(controls.multiline, {}),
  maxLines: merge(controls.maxLines, {}),
  minLines: merge(controls.minLines, {}),
  placeholder: merge(controls.placeholder, {}),
  selectAllOnFocus: merge(controls.selectAllOnFocus, {}),
  type: merge(controls.type, {}),
  value: merge(controls.value, {}),
  intent: merge(controls.intent, {}),
  className: merge(controls.className, {})
});
