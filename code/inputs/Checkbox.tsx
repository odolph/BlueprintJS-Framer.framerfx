<<<<<<< HEAD
import * as React from "react"
import * as System from "@blueprintjs/core"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "../generated/Checkbox"
import { withHOC } from "../withHOC"
=======
import * as React from "react";
import * as System from "@blueprintjs/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "../generated/Checkbox";
import { withHOC } from "../withHOC";
import { Label } from "../content/Label";
>>>>>>> 169e40e11d17a0d05a48517b88f007a1ed6de1c1

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const InnerCheckbox: React.SFC = props => {
<<<<<<< HEAD
    return <System.Checkbox {...props} style={style} />
}
=======
  return (
    <System.Checkbox {...props} style={style}>
      {Label}
    </System.Checkbox>
  );
};
>>>>>>> 169e40e11d17a0d05a48517b88f007a1ed6de1c1

export const Checkbox = withHOC(InnerCheckbox)

Checkbox.defaultProps = {
<<<<<<< HEAD
    width: 150,
    height: 25,
}

addPropertyControls(Checkbox, {
    defaultIndeterminate: merge(controls.defaultIndeterminate, {}),
    indeterminate: merge(controls.indeterminate, {}),
    alignIndicator: merge(controls.alignIndicator, {}),
    checked: merge(controls.checked, {}),
    defaultChecked: merge(controls.defaultChecked, {}),
    disabled: merge(controls.disabled, {}),
    inline: merge(controls.inline, {}),
    label: merge(controls.label, {defaultValue: "checkbox"}),
    labelElement: merge(controls.labelElement, {}),
})
=======
  width: 150,
  height: 25
};

addPropertyControls(Checkbox, {
  defaultIndeterminate: merge(controls.defaultIndeterminate, {}),
  indeterminate: merge(controls.indeterminate, {}),
  alignIndicator: merge(controls.alignIndicator, {}),
  checked: merge(controls.checked, {}),
  children: merge(controls.children, {}),
  defaultChecked: merge(controls.defaultChecked, {}),
  disabled: merge(controls.disabled, {}),
  inline: merge(controls.inline, {}),
  label: merge(controls.label, {}),
  labelElement: merge(controls.labelElement, {}),
  large: merge(controls.large, {}),
  className: merge(controls.className, {}),
  placeholder: merge(controls.placeholder, {})
});
>>>>>>> 169e40e11d17a0d05a48517b88f007a1ed6de1c1
