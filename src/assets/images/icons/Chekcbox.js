import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Chekcbox(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={1}
        y={1}
        width={22}
        height={22}
        rx={3}
        stroke="#04C2F0"
        strokeWidth={2}
      />
      <Path
        d="M20.615 5.516a.904.904 0 00-1.279-.002L8.485 16.337 4.57 12.085a.905.905 0 00-1.331 1.225l4.553 4.944c.166.181.4.287.646.292h.02c.238 0 .468-.095.638-.264L20.613 6.795a.904.904 0 00.002-1.28z"
        fill="#04C2F0"
      />
    </Svg>
  )
}

export default Chekcbox
