import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Pencil(props) {
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
        d="M19.766 4.356L15.644.234a.797.797 0 00-1.128 0L1.538 13.184a.798.798 0 00-.213.38L.022 19.017a.798.798 0 00.961.96l5.453-1.302a.795.795 0 00.379-.213L19.767 5.484a.798.798 0 000-1.128zm-13.92 12.82l-3.97.948.949-3.969L15.08 1.925l2.995 2.996-12.23 12.254z"
        fill="#04C2F0"
      />
      <Path
        d="M12.585 3.266l-1.128 1.128 4.148 4.148 1.128-1.128-4.148-4.148z"
        fill="#04C2F0"
      />
      <Path
        d="M13.53 5.34l-9.972 9.973 1.128 1.128 9.973-9.973-1.128-1.128z"
        fill="#04C2F0"
      />
      <Path
        d="M2.638 13.24L1.51 14.366l4.122 4.122 1.129-1.128-4.123-4.122z"
        fill="#04C2F0"
      />
    </Svg>
  )
}

export default Pencil
