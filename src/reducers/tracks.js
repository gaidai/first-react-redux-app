const initialState = [  

    // 'Hotel California',
    // 'Rocket man'     

];

export default function tracks (state = initialState, action) {
    if(action.type === 'FETCH_TRACKS_SUCCESS'){
        return action.payload;
        
    }else if(action.type === 'ADD_TRACK'){
        return [...state, action.payload];
        
    }else if(action.type === 'DELETE_TRACK'){
            const alltracks = [...state];
            alltracks.some( (element, index) =>{

                if (action.payload === element.name){
                    alltracks.splice(index,1);
                    return true;
                };
                return false;
            });

        return alltracks;
        };      
    
    return state; 
}