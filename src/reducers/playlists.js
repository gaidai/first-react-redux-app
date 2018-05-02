const initialState = [  

    'my home playlist',
    'Work music',
    `I'm sad`   

];

export default function playlist (state = initialState, action) {
    if(action.type === 'ADD_PLAYLIST'){
        return [...state, action.payload];
        
    }else if(action.type === 'DELETE_PLAYLIST'){
            const allplaylists = state;
            allplaylists.some( (element, index) =>{
                if (action.payload === element){
                    allplaylists.splice(index,1);
                    return true;
                };
                return false;
            });
        return allplaylists;
    };      
    
    return state; 
}