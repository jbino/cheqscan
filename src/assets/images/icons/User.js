import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function User(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill="#585A5C">
        <Path d="M12 13.518C4.789 13.518.817 16.93.817 23.124c0 .484.392.876.876.876h20.613a.876.876 0 00.876-.876c0-6.194-3.971-9.606-11.182-9.606zM2.6 22.248C2.946 17.617 6.103 15.27 12 15.27c5.896 0 9.054 2.347 9.399 6.978H2.601zM12 0C8.688 0 6.19 2.548 6.19 5.927c0 3.477 2.606 6.306 5.81 6.306 3.204 0 5.81-2.829 5.81-6.306C17.81 2.548 15.313 0 12 0zm0 10.482c-2.238 0-4.058-2.043-4.058-4.555 0-2.42 1.707-4.175 4.058-4.175 2.314 0 4.058 1.795 4.058 4.175 0 2.512-1.82 4.555-4.058 4.555z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default User
