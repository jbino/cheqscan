import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Plus(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.938 1.188a.937.937 0 10-1.875 0v4.875H1.188a.937.937 0 100 1.875h4.875v4.875a.938.938 0 001.875 0V7.938h4.875a.937.937 0 100-1.875H7.936V1.188z"
        fill="#006DAA"
      />
    </Svg>
  )
}

export default Plus
