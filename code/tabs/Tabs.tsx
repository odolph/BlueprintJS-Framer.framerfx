import * as React from "react"
import * as System from "@blueprintjs/core"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "../generated/Tabs"
import { withHOC } from "../withHOC"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const InnerTabs: React.SFC = props => {
    return <System.Tabs {...props} style={style} />
}

export const Tabs = withHOC(InnerTabs)

Tabs.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Tabs, {
    animate: merge(controls.animate, {}),
    defaultSelectedTabId: merge(controls.defaultSelectedTabId, {}),
    id: merge(controls.id, {}),
    large: merge(controls.large, {}),
    renderActiveTabPanelOnly: merge(controls.renderActiveTabPanelOnly, {}),
    selectedTabId: merge(controls.selectedTabId, {}),
    vertical: merge(controls.vertical, {}),
    className: merge(controls.className, {}),
})
