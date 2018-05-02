var mockApiData = [
    {
        id: 1,
        name: 'Hotel California'
    },
    {
        id: 2,
        name: 'Rocket man'
    },
    {
        id: 3,
        name: 'Rumble on '
    },
    {
        id: 4,
        name: 'Come together '
    }
];
export const getTracks = () => {
    return dispatch => {
        setTimeout(() => {
            console.log('I got trackkksss!!!!');
            dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
        }, 1500);
    }
}