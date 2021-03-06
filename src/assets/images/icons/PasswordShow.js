import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PasswordShow(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.848 11.533C23.633 11.24 18.524 4.352 12 4.352S.366 11.24.152 11.532a.792.792 0 000 .935c.214.293 5.323 7.181 11.848 7.181 6.524 0 11.633-6.888 11.848-7.181a.791.791 0 000-.934zM12 18.066c-4.806 0-8.969-4.572-10.2-6.067C3.03 10.503 7.183 5.934 12 5.934c4.806 0 8.968 4.571 10.2 6.067-1.23 1.495-5.384 6.065-10.2 6.065z"
        fill="#585A5C"
      />
      <Path
        d="M12 7.253A4.753 4.753 0 007.252 12 4.753 4.753 0 0012 16.747 4.753 4.753 0 0016.747 12 4.753 4.753 0 0012 7.253zm0 7.912A3.168 3.168 0 018.835 12 3.168 3.168 0 0112 8.835 3.168 3.168 0 0115.165 12 3.168 3.168 0 0112 15.165z"
        fill="#585A5C"
      />
    </Svg>
  )
}

export default PasswordShow
