import { connect } from "react-redux";
import { setStateShortUrl, setStateUrlMaps, reset } from "./actions";
const Connected = ( props ) => {
  return props.render && props.render(props);
};
const mapStateToProps = (state) => {
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