import { connect } from "react-redux";
// import { store } from "Store";
import { setStateShortUrl, setStateUrlMaps, reset } from "./actions";
const Connected = ( props ) => {
  // const _storeState = store.getState();
  // let shortUrlInMaps = props.data;
  // if(props.data.url){
  //   const urlInMaps = _storeState.urlMaps.filter((urlMap) => urlMap.url === props.data.url )[0];
  //   if( urlInMaps ) shortUrlInMaps = urlInMaps;
  // }
  // props.setStateShortUrl && props.setStateShortUrl(shortUrlInMaps); //set initial data to maps 
  return props.render && props.render(props);
};
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    shortUrl: state.shortUrl,
    urlMaps: state.urlMaps
  };
};
const mapDispatchToProps = { setStateShortUrl, setStateUrlMaps, reset };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connected);