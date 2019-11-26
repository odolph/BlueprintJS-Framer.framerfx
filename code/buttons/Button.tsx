import * as React from "react"
import * as System from "@blueprintjs/core"
import { ControlType, addPropertyControls } from "framer"
import { controls, merge } from "../generated/Button"
import { withHOC } from "../withHOC"
import { LabelPropertyControl } from "../utils/PropertyControls"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const InnerButton = props => {
    return <System.Button {...props} style={style} />
}

export const Button = withHOC(InnerButton)

Button.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Button, {
    active: merge(controls.active, {}),
    fill: merge(controls.fill, {}),
    icon: merge(controls.icon, {}),
    interactive: merge(controls.interactive, {}),
    large: merge(controls.large, {}),
    minimal: merge(controls.minimal, {}),
    multiline: merge(controls.multiline, {}),
    rightIcon: merge(controls.rightIcon, {}),
    round: merge(controls.round, {}),
    intent: {
        title: "Intent",
        options: ["none", "primary", "success", "warning", "danger"],
        optionTitles: ["None", "Primary", "Success", "Warning", "Danger"],
        defaultValue: "none",
        type: ControlType.Enum
    },
    disabled: merge(controls.disabled, {}),
    placeholder: merge(controls.placeholder, {}),
    ...LabelPropertyControl
    });
