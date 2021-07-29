import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Key({ color = '#585A5C', ...rest}) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <G clipPath="url(#prefix__clip0)" fill={color}>
        <Path d="M26.335 7.935c-3.124 0-5.665 2.522-5.665 5.622V18.4a5.671 5.671 0 005.665 5.665A5.671 5.671 0 0032 18.4v-4.8a5.671 5.671 0 00-5.665-5.665zm3.07 10.465a3.074 3.074 0 01-3.07 3.07 3.074 3.074 0 01-3.07-3.07v-4.843c0-1.67 1.377-3.027 3.07-3.027a3.074 3.074 0 013.07 3.07v4.8z" />
        <Path d="M21.968 14.681H1.298c-.717 0-1.298.58-1.298 1.297V21.6a1.297 1.297 0 102.595 0v-4.324h19.373a1.297 1.297 0 100-2.595z" />
        <Path d="M5.708 14.681c-.716 0-1.297.58-1.297 1.297v4.325a1.297 1.297 0 102.595 0v-4.325c0-.716-.581-1.297-1.298-1.297zM10.206 14.681c-.717 0-1.298.58-1.298 1.297v5.406a1.297 1.297 0 102.595 0v-5.406c0-.716-.58-1.297-1.297-1.297z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Key
