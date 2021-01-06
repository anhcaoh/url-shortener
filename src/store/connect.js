import { compose } from "redux";
import { connect } from "react-redux";
import { setStateShortUrl, setStateUrlMaps, reset } from "./actions";

const Connected = (props) => {
  return props.render(props);
};
const mapStateToProps = (state) => {
  return {
    shortUrl: state.shortUrl,
    urlMaps: state.urlMaps
  };
};
const mapDispatchToProps = { setStateShortUrl, setStateUrlMaps, reset };
const enhance = compose(
  connect(mapStateToProps,
  mapDispatchToProps));
export default enhance(Connected);