import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArrow(props) {
  return (
    <Svg
      width={14}
      height={8}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.337.337a.937.937 0 011.326 0L7 5.674 12.337.337a.937.937 0 111.326 1.326l-6 6a.937.937 0 01-1.326 0l-6-6a.937.937 0 010-1.326z"
        fill="#585A5C"
      />
    </Svg>
  )
}

export default DownArrow
