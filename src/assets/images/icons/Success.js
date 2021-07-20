import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Success(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M35.985 16.11a1.945 1.945 0 00-2.751-.073L20.811 27.82l-5.925-6.084a1.945 1.945 0 10-2.788 2.715l7.265 7.459a1.944 1.944 0 002.733.055L35.912 18.86c.78-.74.813-1.971.073-2.751z"
        fill="#47EA9C"
      />
      <Path
        d="M24 0C10.766 0 0 10.766 0 24s10.766 24 24 24 24-10.766 24-24S37.234 0 24 0zm0 44.108c-11.087 0-20.108-9.02-20.108-20.108 0-11.087 9.02-20.108 20.108-20.108 11.088 0 20.108 9.02 20.108 20.108 0 11.088-9.02 20.108-20.108 20.108z"
        fill="#47EA9C"
      />
    </Svg>
  )
}

export default Success
