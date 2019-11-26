import * as React from "react"
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css"

export function withHOC(Component): React.SFC {
    return (props: any) => {
        return <Component {...props} />
    }
}
