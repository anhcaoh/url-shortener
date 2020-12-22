
import { SET_SHORT_URL, SET_URL_MAPS, RESET } from "./constants";
const setStateShortUrl = ( shortUrl ) => {
    return { 
      type: SET_SHORT_URL, 
      shortUrl: shortUrl 
    };
};
const setStateUrlMaps = ( shortUrl ) => {
    return { 
      type: SET_URL_MAPS, 
      shortUrl: shortUrl 
    };
};
const reset = () => {
    return { 
        type: RESET
    };
};
export { setStateShortUrl, setStateUrlMaps, reset };