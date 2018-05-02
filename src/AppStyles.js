import {StyleSheet} from 'aphrodite';

import {blackSquare} from './squareStyles';

export default StyleSheet.create({
    container: {
        background : '#75D5C2',
        display: 'flex'
    },
    square: {
        ...blackSquare
    }
});