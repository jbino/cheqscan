import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function Unchecked(props) {
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
        stroke="#C0C5C9"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Unchecked
