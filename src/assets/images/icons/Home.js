import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Home({ color = '#3A3F45', ...rest }) {
    return (
        <Svg
            width={22}
            height={24}
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <Path
                d="M21.285 9.386l-10-9.167a.834.834 0 00-1.143.016L.697 9.402A.834.834 0 00.444 10v13.167c0 .46.373.833.834.833h6.944c.46 0 .833-.373.833-.833v-6.112h3.89v6.112c0 .46.372.833.833.833h6.944c.46 0 .833-.373.833-.833V10a.834.834 0 00-.27-.614zM19.89 22.332H14.61v-6.11a.833.833 0 00-.833-.834H8.222a.833.833 0 00-.833.833v6.111H2.11v-11.98l8.628-8.374 9.15 8.388v11.966z"
                fill={color}
            />
        </Svg>
    )
}

export default Home
