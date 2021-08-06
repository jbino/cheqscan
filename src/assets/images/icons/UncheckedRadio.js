import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function UncheckedRadio(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={11} stroke="#C0C5C9" strokeWidth={2} />
    </Svg>
  )
}

export default UncheckedRadio
