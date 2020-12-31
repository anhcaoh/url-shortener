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
            const hasShortUrlInMaps = _stateMaps.filter((urlMap) => {
                return urlMap.hash === action.shortUrl.hash;
            })[0];
            console.log(_stateMaps, hasShortUrlInMaps);
            if( !hasShortUrlInMaps ) _stateMaps.push( action.shortUrl );
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