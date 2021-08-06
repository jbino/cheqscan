import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Back(props) {
  return (
    <Svg
      width={24}
      height={22}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.741 21.141L.283 11.683a.965.965 0 010-1.365L9.74.859a.962.962 0 011.365 0 .965.965 0 010 1.365l-7.81 7.81h19.74a.965.965 0 010 1.931H3.295l7.81 7.811a.965.965 0 01-1.365 1.365z"
        fill="#04C2F0"
      />
    </Svg>
  )
}

export default Back
