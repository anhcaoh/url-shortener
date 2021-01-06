import { SET_SHORT_URL, SET_URL_MAPS, RESET } from "./constants";
const initialState = {
    urlMaps: [],
    shortUrl: null
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SHORT_URL : {
            return Object.assign({}, state, {
                shortUrl: action.shortUrl
            });
        }
        case SET_URL_MAPS : {
            let _stateMaps = [...state.urlMaps];
            const shortUrlInMaps = _stateMaps.filter((urlMap) => {
                return action.shortUrl && urlMap.hash === action.shortUrl.hash;
            })[0];
    
            if( ("undefined" === typeof(shortUrlInMaps) && 
                "undefined" !== typeof(action.shortUrl) && 
                null !== action.shortUrl) ){
                _stateMaps.push( action.shortUrl );
            }
            if( action.urlMaps ) _stateMaps = action.urlMaps;
            return Object.assign({}, state, {
                urlMaps: _stateMaps
            });
        }
        case RESET : {
            return Object.assign({}, state, initialState);
        }
        default: return state;
    }
}
export default rootReducer;