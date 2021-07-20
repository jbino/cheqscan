import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Email(props) {
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
        <Path d="M21.533 9.42v12.898H2.467V9.42H.785v13.738c0 .464.377.84.841.84h20.748a.841.841 0 00.841-.84V9.42h-1.682z" />
        <Path d="M22.911 8.774l-2.972-2.468-1.074 1.295 2.15 1.784L12 16.11 2.986 9.386l2.12-1.757-1.072-1.295L1.09 8.773a.841.841 0 00.033 1.322l10.374 7.738a.838.838 0 001.006 0l10.374-7.738a.841.841 0 00.034-1.321zM12.537.194a.84.84 0 00-1.07-.003L8.354 2.742l1.067 1.301 2.576-2.112 2.578 2.137 1.074-1.295-3.112-2.58z" />
        <Path d="M19.374 2.524H4.626a.841.841 0 00-.84.84v8.3h1.681V4.206h13.066v7.458h1.682v-8.3a.841.841 0 00-.841-.84z" />
        <Path d="M15.621 10.368l-3.056-2.776a.841.841 0 00-1.13 0l-3.057 2.776a.841.841 0 101.131 1.246L12 9.352l2.492 2.262a.841.841 0 001.13-1.246z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Email
