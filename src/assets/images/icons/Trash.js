import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Trash(props) {
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
        d="M13.812 6.895l-1.566-.057-.34 9.269 1.566.057.34-9.269zM10.783 6.867H9.217v9.269h1.566v-9.27zM8.093 16.107l-.34-9.27-1.565.058.34 9.27 1.565-.058z"
        fill="#FC374B"
      />
      <Path
        d="M.679 3.002V4.57h1.632l1.295 14.716a.783.783 0 00.78.715h11.201c.406 0 .745-.31.78-.715l1.296-14.716h1.658V3.002H.68zm14.19 15.431H5.105L3.884 4.57H16.09l-1.22 13.864z"
        fill="#FC374B"
      />
      <Path
        d="M12.559 0H7.44c-.72 0-1.305.586-1.305 1.305v2.48h1.566V1.568h4.596v2.219h1.566v-2.48C13.864.585 13.28 0 12.56 0z"
        fill="#FC374B"
      />
    </Svg>
  )
}

export default Trash
