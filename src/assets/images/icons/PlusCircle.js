import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusCircle({color = '#3A3F45', ...rest}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <Path
        d="M16 0C7.178 0 0 7.178 0 16c0 8.823 7.178 16 16 16 8.823 0 16-7.177 16-16 0-8.822-7.177-16-16-16zm0 29.714C8.438 29.714 2.286 23.562 2.286 16S8.438 2.286 16 2.286 29.714 8.438 29.714 16 23.562 29.714 16 29.714z"
        fill={color}
      />
      <Path
        d="M16 8.38c-.631 0-1.143.512-1.143 1.144v12.952a1.143 1.143 0 102.286 0V9.524c0-.632-.512-1.143-1.143-1.143z"
        fill="#006DAA"
      />
      <Path
        d="M22.476 14.857H9.524a1.143 1.143 0 100 2.286h12.952a1.143 1.143 0 100-2.286z"
        fill={color}
      />
    </Svg>
  )
}

export default PlusCircle
