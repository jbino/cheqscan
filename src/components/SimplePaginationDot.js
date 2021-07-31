import React from 'react';
import { Pagination } from 'react-native-snap-carousel';

const SimplePaginationDot = ({ entries, activeSlide }) => {
    return (
        <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#006DAA',
                marginHorizontal: -4
            }}
            inactiveDotStyle={{
                backgroundColor:'#C0C5C9'
            }}
            inactiveDotOpacity={0.6}
            inactiveDotScale={1}
        />
    );
}

export default SimplePaginationDot;