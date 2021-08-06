import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Vector(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.539.417A.76.76 0 0018.86 0H1.139a.76.76 0 00-.611 1.21l6.94 9.42v8.61c0 .42.34.76.76.76h3.544c.42 0 .76-.34.76-.76v-8.61l6.94-9.42a.76.76 0 00.067-.793zM11.16 9.929a.758.758 0 00-.149.45v8.102H8.987V10.38a.759.759 0 00-.148-.45L2.642 1.518h14.716l-6.197 8.41z"
        fill="#006DAA"
      />
    </Svg>
  )
}

export default Vector
