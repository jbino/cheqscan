import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Alert(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 27.5c6.351 0 11.5-5.149 11.5-11.5S22.351 4.5 16 4.5 4.5 9.649 4.5 16 9.649 27.5 16 27.5zm0 2.5c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14z"
        fill="#585A5C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 24c-.69 0-1.25-.56-1.25-1.25v-8.5a1.25 1.25 0 112.5 0v8.5c0 .69-.56 1.25-1.25 1.25z"
        fill="#585A5C"
      />
      <Circle cx={16} cy={9.5} r={1} fill="#585A5C" stroke="#585A5C" />
    </Svg>
  )
}

export default Alert
