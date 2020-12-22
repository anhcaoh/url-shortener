/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.scss */ "./src/components/Button/button.scss");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Button = function Button(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", _extends({}, props, {
    type: props.type || "button",
    className: ["button", props.className].join(" ").trim()
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Form/index.js":
/*!**************************************!*\
  !*** ./src/components/Form/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.scss */ "./src/components/Form/form.scss");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Form = function Form(props) {
  var onSubmitHandler = function onSubmitHandler(event) {
    event.preventDefault();
    return event;
    ;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
    onSubmit: onSubmitHandler
  }, props), props.children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/components/Input/index.js":
/*!***************************************!*\
  !*** ./src/components/Input/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Store */ "./src/store/index.js");
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.scss */ "./src/components/Input/input.scss");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Input = function Input(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var onChangeHanlder = function onChangeHanlder(e) {
    var _value = e.target.value;

    var _storeState = Store__WEBPACK_IMPORTED_MODULE_1__.store.getState();

    var _maps = _storeState.urlMaps || props.urlMaps || [];

    setValue(_value);

    var elementValueMaps = _maps.map(function (map) {
      if (map.id === props.id) {
        map.value = _value;
        setValue(_value);
      }

      return map;
    });

    elementValueMaps && props.setMaps && props.setMaps(elementValueMaps);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
    type: props.type || "text",
    autoComplete: "new-password",
    placeholder: props.placeholder,
    style: props.style,
    value: value,
    onChange: onChangeHanlder
  }, props));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": () => /* binding */ Row,
/* harmony export */   "Columns": () => /* binding */ Columns,
/* harmony export */   "Column": () => /* binding */ Column,
/* harmony export */   "Card": () => /* binding */ Card,
/* harmony export */   "Flexbox": () => /* binding */ Flexbox
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var Components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Typography */ "./src/components/Typography/index.js");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.scss */ "./src/components/Layout/layout.scss");




var Row = function Row(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_1__.Block, {
    className: ["row", props.className].join(" ").trim()
  }, props.children);
};

var Columns = function Columns(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_1__.Block, {
    className: ["columns", props.className].join(" ").trim()
  }, props.children);
};

var Column = function Column(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_1__.Block, {
    className: ["column", props.className].join(" ").trim()
  }, props.children);
};

var Card = function Card(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_1__.Block, {
    className: ["card", props.className].join(" ").trim()
  }, props.children);
};

var Flexbox = function Flexbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_1__.Block, {
    className: ["flexbox", props.className].join(" ").trim()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_1__.Block, null, props.children));
};



/***/ }),

/***/ "./src/components/Typography/index.js":
/*!********************************************!*\
  !*** ./src/components/Typography/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H1": () => /* binding */ H1,
/* harmony export */   "H2": () => /* binding */ H2,
/* harmony export */   "Paragraph": () => /* binding */ Paragraph,
/* harmony export */   "Block": () => /* binding */ Block,
/* harmony export */   "Text": () => /* binding */ Text,
/* harmony export */   "Label": () => /* binding */ Label
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var H1 = function H1(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: props.className
  }, props.children);
};

var H2 = function H2(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: props.className
  }, props.children);
};

var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: props.className
  }, props.children);
};

var Block = function Block(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: props.className
  }, props.children);
};

var Text = function Text(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: props.className
  }, props.children);
};

var Label = function Label(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: props["for"],
    className: props.className
  }, props.children);
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Store */ "./src/store/index.js");
/* harmony import */ var Store_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Store/connect */ "./src/store/connect.js");
/* harmony import */ var Components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var Components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/Typography */ "./src/components/Typography/index.js");
/* harmony import */ var Components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/Form */ "./src/components/Form/index.js");
/* harmony import */ var Components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Components/Button */ "./src/components/Button/index.js");
/* harmony import */ var Components_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Components/Input */ "./src/components/Input/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var Scss_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Scss/style.scss */ "./src/scss/style.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function App() {
  var _pathname = window.location.pathname;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_pathname === "/" ? "" : _pathname),
      _useState2 = _slicedToArray(_useState, 2),
      shortUrl = _useState2[0],
      setShortUrl = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      encodedUrl = _useState4[0],
      setEncodedUrl = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(shortUrl || ""),
      _useState6 = _slicedToArray(_useState5, 2),
      rawUrl = _useState6[0],
      setRawUrl = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    hasError: false,
    message: ""
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      hasError = _useState8[0],
      setHasError = _useState8[1];

  var UrlShortener = function UrlShortener() {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useHistory)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
      store: Store__WEBPACK_IMPORTED_MODULE_3__.store
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Store_connect__WEBPACK_IMPORTED_MODULE_4__.default, {
      data: {
        "shortUrl": shortUrl,
        "hash": encodedUrl
      },
      render: function render(_ref) {
        var urlMaps = _ref.urlMaps,
            setStateShortUrl = _ref.setStateShortUrl,
            setStateUrlMaps = _ref.setStateUrlMaps,
            reset = _ref.reset;

        if (urlMaps && urlMaps.length) {
          //Get hash from local storage urlMaps
          var _urlInMaps = urlMaps.filter(function (urlMap) {
            return urlMap.shortUrl === _pathname;
          })[0];
          if (_urlInMaps) console.log(_urlInMaps);

          var _uri = (_urlInMaps && _urlInMaps.hash || _pathname.replace("/", "")).replace("/", ""); //Get original long URL from short URL/hash


          if (_uri) {
            fetch("http://localhost:9000/long/" + _uri, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (response) {
              return response.json();
            }).then(function (_ref2) {
              var status = _ref2.status,
                  originalUrl = _ref2.originalUrl,
                  hash = _ref2.hash;

              if (status === 200 && originalUrl) {
                setRawUrl(originalUrl);
              }
            });
          }
        }

        var resetUrls = function resetUrls() {
          setShortUrl("");
          setEncodedUrl("");
        };

        var makeShortUrl = function makeShortUrl(_rawUrl) {
          return fetch("http://localhost:9000/short", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "url": _rawUrl
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            var shortUrl = data.shortUrl,
                hash = data.hash,
                hasError = data.hasError,
                message = data.message;

            if (hasError) {
              setHasError({
                "hasError": hasError,
                "message": message
              });
            } else {
              setHasError({
                "hasError": false,
                "message": ""
              });
            }

            return {
              shortUrl: shortUrl,
              hash: hash
            };
          })["catch"](function (error) {
            return {
              "hasError": true,
              "message": "Our service is feeling under the weather. We'll be back better soon."
            };
          });
        };

        var handleReset = function handleReset() {
          reset();
          setRawUrl("");
          resetUrls(); // history.push("/");
        };

        var onChangeHandler = function onChangeHandler(e) {
          var _data = e.target.value;
          setRawUrl(_data);
          history.push("/");
        };

        var handleShortUrlMaker = function handleShortUrlMaker(e) {
          makeShortUrl(rawUrl).then(function (_ref3) {
            var shortUrl = _ref3.shortUrl,
                hash = _ref3.hash,
                hasError = _ref3.hasError,
                message = _ref3.message;

            if (shortUrl && hash) {
              setStateShortUrl({
                shortUrl: shortUrl,
                hash: hash
              });
              setStateUrlMaps({
                shortUrl: shortUrl,
                hash: hash
              });
              setShortUrl(shortUrl);
              setEncodedUrl(hash);
              setRawUrl(shortUrl);
              setHasError({
                "hasError": false,
                "message": ""
              });
            } else if (hasError) {
              setHasError({
                "hasError": hasError,
                "message": message
              });
            } // history.push( url );

          });
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Layout__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Layout__WEBPACK_IMPORTED_MODULE_5__.Columns, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Layout__WEBPACK_IMPORTED_MODULE_5__.Column, {
          className: "col-12"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Layout__WEBPACK_IMPORTED_MODULE_5__.Flexbox, {
          className: "text--center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_6__.Block, {
          className: "has-highlight-divider"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_6__.H1, null, "URL Shortener"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_6__.Block, {
          className: "stord-highlight-divider"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
          className: "text-center",
          style: {
            "width": "23rem"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Input__WEBPACK_IMPORTED_MODULE_9__.default, {
          onChange: onChangeHandler,
          autoFocus: true,
          value: rawUrl,
          urlMaps: urlMaps,
          className: "vertical-space--2 text--truncated",
          placeholder: "e.g. https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
          disabled: !rawUrl || hasError && hasError.hasError,
          onClick: handleReset
        }, "Clear"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: "primary stord margin-left--2",
          disabled: !rawUrl || hasError && hasError.hasError,
          onClick: handleShortUrlMaker
        }, "Shorten it"), hasError && hasError.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_6__.Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Components_Typography__WEBPACK_IMPORTED_MODULE_6__.Text, {
          className: "label--warning"
        }, hasError && hasError.message)))))));
      }
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    component: UrlShortener
  }))));
}

(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStateShortUrl": () => /* binding */ setStateShortUrl,
/* harmony export */   "setStateUrlMaps": () => /* binding */ setStateUrlMaps,
/* harmony export */   "reset": () => /* binding */ reset
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/store/constants.js");


var setStateShortUrl = function setStateShortUrl(shortUrl) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_SHORT_URL,
    shortUrl: shortUrl
  };
};

var setStateUrlMaps = function setStateUrlMaps(shortUrl) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_URL_MAPS,
    shortUrl: shortUrl
  };
};

var reset = function reset() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.RESET
  };
};



/***/ }),

/***/ "./src/store/connect.js":
/*!******************************!*\
  !*** ./src/store/connect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/store/actions.js");
 // import { store } from "Store";



var Connected = function Connected(props) {
  // const _storeState = store.getState();
  // let shortUrlInMaps = props.data;
  // if(props.data.url){
  //   const urlInMaps = _storeState.urlMaps.filter((urlMap) => urlMap.url === props.data.url )[0];
  //   if( urlInMaps ) shortUrlInMaps = urlInMaps;
  // }
  // props.setStateShortUrl && props.setStateShortUrl(shortUrlInMaps); //set initial data to maps 
  return props.render && props.render(props);
};

var mapStateToProps = function mapStateToProps(state
/*, ownProps*/
) {
  return {
    shortUrl: state.shortUrl,
    urlMaps: state.urlMaps
  };
};

var mapDispatchToProps = {
  setStateShortUrl: _actions__WEBPACK_IMPORTED_MODULE_1__.setStateShortUrl,
  setStateUrlMaps: _actions__WEBPACK_IMPORTED_MODULE_1__.setStateUrlMaps,
  reset: _actions__WEBPACK_IMPORTED_MODULE_1__.reset
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(Connected));

/***/ }),

/***/ "./src/store/constants.js":
/*!********************************!*\
  !*** ./src/store/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_SHORT_URL": () => /* binding */ SET_SHORT_URL,
/* harmony export */   "SET_URL_MAPS": () => /* binding */ SET_URL_MAPS,
/* harmony export */   "RESET": () => /* binding */ RESET
/* harmony export */ });
var SET_SHORT_URL = "SET_SHORT_URL";
var SET_URL_MAPS = "SET_URL_MAPS";
var RESET = "RESET";

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => /* binding */ store,
/* harmony export */   "persistor": () => /* binding */ persistor
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers.js");


 // defaults to localStorage for web


var persistConfig = {
  key: "url-shortener",
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__.default
};
var persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_2__.default);
var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore)(store);


/***/ }),

/***/ "./src/store/reducers.js":
/*!*******************************!*\
  !*** ./src/store/reducers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/store/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var initialState = {
  urlMaps: [],
  shortUrl: {
    shortUrl: null,
    hash: null
  }
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SET_SHORT_URL:
      {
        return Object.assign({}, state, {
          shortUrl: action.shortUrl
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__.SET_URL_MAPS:
      {
        var _stateMaps = _toConsumableArray(state.urlMaps);

        var hasShortUrlInMaps = _stateMaps.filter(function (urlMap) {
          return urlMap.hash === action.shortUrl.hash;
        })[0];

        console.log(_stateMaps, hasShortUrlInMaps);
        if (!hasShortUrlInMaps) _stateMaps.push(action.shortUrl);
        return Object.assign({}, state, {
          urlMaps: _stateMaps
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__.RESET:
      {
        return Object.assign({}, state, initialState);
      }

    default:
      return state;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/button.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/button.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".text--truncated {\n  text-overflow: ellipsis;\n}\n\n.text--bold {\n  font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n  font-weight: 700;\n}\n\n.text--italic {\n  font-style: italic;\n}\n\n.text--center {\n  text-align: center;\n}\n\n.label--warning {\n  color: #cd1e0a;\n}\n\n.text--small {\n  font-size: small;\n}\n\n.text--medium {\n  font-size: medium;\n}\n\n.text--large {\n  font-size: large;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.button {\n  font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n  color: #0a0a0a;\n  font-size: 14pt;\n  font-weight: normal;\n  -webkit-font-smoothing: antialiased;\n  padding: 0.25rem 0.5rem;\n  cursor: pointer;\n  outline: none;\n  border-radius: 0.15rem;\n  border: 1px solid #eee;\n}\n\n.button.primary {\n  background-color: #1463ff;\n  color: #fefefe;\n  border-color: #1463ff;\n}\n\n.button.stord {\n  box-shadow: 6px 6px 0 #010e18;\n  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);\n}", "",{"version":3,"sources":["webpack://./src/scss/__typography.scss","webpack://./src/components/Button/button.scss","webpack://./src/scss/__variables.scss"],"names":[],"mappings":"AAQA;EACI,uBAAA;ACPJ;;ADSA;EACI,iEEVc;EFWd,gBAAA;ACNJ;;ADQA;EACI,kBAAA;ACLJ;;ADOA;EACI,kBAAA;ACJJ;;ADMA;EACI,cAAA;ACHJ;;ADQQ;EACI,gBAAA;ACLZ;;ADIQ;EACI,iBAAA;ACDZ;;ADAQ;EACI,gBAAA;ACGZ;;AA9BA;EACI,mBAAA;EACA,YAAA;AAiCJ;;AA/BA;EDHI,iEEFgB;EFGhB,cAAA;EACA,eAAA;EACA,mBAAA;EACA,mCAAA;ECCA,uBAAA;EACA,eAAA;EACA,aAAA;EACA,sBCFK;EDGL,sBAAA;AAsCJ;;AApCA;EACI,yBAAA;EACA,cAAA;EACA,qBAAA;AAuCJ;;AAhCA;EACI,6BAAA;EACA,+CAAA;AAmCJ","sourcesContent":["@import \"./__variables.scss\";\n@mixin font-style {\n    font-family: $body--font-family;\n    color: $body--color;\n    font-size: $body--font-size;\n    font-weight: $body--font-weight;\n    -webkit-font-smoothing: antialiased;\n}\n.text--truncated{\n    text-overflow: ellipsis;\n}\n.text--bold{\n    font-family: $body--font-bold;\n    font-weight: 700;\n}\n.text--italic{\n    font-style: italic;\n}\n.text--center{\n    text-align: center;\n}\n.label--warning{\n    color: #cd1e0a;\n}\n$sizes: \"small\", \"medium\", \"large\";\n@mixin text-size-modifiers() {\n    @each $size in $sizes {\n        .text--#{$size}{\n            font-size: #{$size};\n        }\n    }\n}\n@include text-size-modifiers();","@import \"Scss/__typography.scss\";\nbutton:disabled{\n    cursor: not-allowed;\n    opacity: 0.5;\n}\n.button{\n    @include font-style();\n    padding: 0.25rem 0.5rem;\n    cursor: pointer;\n    outline: none;\n    border-radius: $radius;\n    border: 1px solid #eee;\n}\n.button.primary{\n    background-color: #1463ff;\n    color: #fefefe;\n    border-color: #1463ff;\n    // background: #457fca;  /* fallback for old browsers */\n    // background: -webkit-linear-gradient(to bottom, #5691c8, #457fca);  /* Chrome 10-25, Safari 5.1-6 */\n    // background: linear-gradient(to bottom, #5691c8, #457fca); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    // color: #f1f1f1;\n    // border-color: #548fc8;\n}\n.button.stord{\n    box-shadow: 6px 6px 0 #010e18;\n    transition: .4s cubic-bezier(.2,.8,.2,1);\n}","$body--font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n$body--font-light: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n$body--font-bold: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n$body--color: #0a0a0a;\n$body--font-size: 14pt;\n$body--font-weight: normal;\n$body--background: #f3f3f3;\n\n$radius: 0.15rem;\n\n$border--width: 1px;\n$border--color: $body--color;\n$input--border: $border--width solid $border--color;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/form.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/form.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/input.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/input.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/layout.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/layout.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n.column {\n  display: inline-block;\n  vertical-align: top;\n}\n.column.col-12 {\n  width: 100%;\n}\n.column.col-4 {\n  width: 25%;\n}\n.column.col-3 {\n  width: 33.33%;\n}\n\n.flexbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/components/Layout/layout.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,mBAAA;AACJ;;AACA;EACI,qBAAA;EACA,mBAAA;AAEJ;AADI;EACI,WAAA;AAGR;AADI;EACI,UAAA;AAGR;AADI;EACI,aAAA;AAGR;;AAAA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAGJ","sourcesContent":[".card{\n    display: block;\n    margin-bottom: 1rem;\n}\n.column{\n    display: inline-block;\n    vertical-align: top;\n    &.col-12{\n        width: 100%;\n    }\n    &.col-4{\n        width: 25%;\n    }\n    &.col-3{\n        width: 33.33%;\n    }\n}\n.flexbox{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vertical-space--1 {\n  margin-bottom: 1rem;\n}\n\n.vertical-space--2 {\n  margin-bottom: 2rem;\n}\n\n.vertical-space--3 {\n  margin-bottom: 3rem;\n}\n\n.vertical-space--4 {\n  margin-bottom: 4rem;\n}\n\n.vertical-space--5 {\n  margin-bottom: 5rem;\n}\n\n.horizontal-space--1 {\n  margin-right: 1rem;\n}\n\n.horizontal-space--2 {\n  margin-right: 2rem;\n}\n\n.horizontal-space--3 {\n  margin-right: 3rem;\n}\n\n.horizontal-space--4 {\n  margin-right: 4rem;\n}\n\n.horizontal-space--5 {\n  margin-right: 5rem;\n}\n\n.padding--1 {\n  padding: 1rem;\n}\n\n.padding--2 {\n  padding: 2rem;\n}\n\n.padding--3 {\n  padding: 3rem;\n}\n\n.padding--4 {\n  padding: 4rem;\n}\n\n.padding--5 {\n  padding: 5rem;\n}\n\n.padding-top--1 {\n  padding-top: 1rem;\n}\n\n.padding-top--2 {\n  padding-top: 2rem;\n}\n\n.padding-top--3 {\n  padding-top: 3rem;\n}\n\n.padding-top--4 {\n  padding-top: 4rem;\n}\n\n.padding-top--5 {\n  padding-top: 5rem;\n}\n\n.padding-right--1 {\n  padding-right: 1rem;\n}\n\n.padding-right--2 {\n  padding-right: 2rem;\n}\n\n.padding-right--3 {\n  padding-right: 3rem;\n}\n\n.padding-right--4 {\n  padding-right: 4rem;\n}\n\n.padding-right--5 {\n  padding-right: 5rem;\n}\n\n.padding-bottom--1 {\n  padding-bottom: 1rem;\n}\n\n.padding-bottom--2 {\n  padding-bottom: 2rem;\n}\n\n.padding-bottom--3 {\n  padding-bottom: 3rem;\n}\n\n.padding-bottom--4 {\n  padding-bottom: 4rem;\n}\n\n.padding-bottom--5 {\n  padding-bottom: 5rem;\n}\n\n.padding-left--1 {\n  padding-left: 1rem;\n}\n\n.padding-left--2 {\n  padding-left: 2rem;\n}\n\n.padding-left--3 {\n  padding-left: 3rem;\n}\n\n.padding-left--4 {\n  padding-left: 4rem;\n}\n\n.padding-left--5 {\n  padding-left: 5rem;\n}\n\n.margin--1 {\n  margin: 1rem;\n}\n\n.margin--2 {\n  margin: 2rem;\n}\n\n.margin--3 {\n  margin: 3rem;\n}\n\n.margin--4 {\n  margin: 4rem;\n}\n\n.margin--5 {\n  margin: 5rem;\n}\n\n.margin-top--1 {\n  margin-top: 1rem;\n}\n\n.margin-top--2 {\n  margin-top: 2rem;\n}\n\n.margin-top--3 {\n  margin-top: 3rem;\n}\n\n.margin-top--4 {\n  margin-top: 4rem;\n}\n\n.margin-top--5 {\n  margin-top: 5rem;\n}\n\n.margin-right--1 {\n  margin-right: 1rem;\n}\n\n.margin-right--2 {\n  margin-right: 2rem;\n}\n\n.margin-right--3 {\n  margin-right: 3rem;\n}\n\n.margin-right--4 {\n  margin-right: 4rem;\n}\n\n.margin-right--5 {\n  margin-right: 5rem;\n}\n\n.margin-bottom--1 {\n  margin-bottom: 1rem;\n}\n\n.margin-bottom--2 {\n  margin-bottom: 2rem;\n}\n\n.margin-bottom--3 {\n  margin-bottom: 3rem;\n}\n\n.margin-bottom--4 {\n  margin-bottom: 4rem;\n}\n\n.margin-bottom--5 {\n  margin-bottom: 5rem;\n}\n\n.margin-left--1 {\n  margin-left: 1rem;\n}\n\n.margin-left--2 {\n  margin-left: 2rem;\n}\n\n.margin-left--3 {\n  margin-left: 3rem;\n}\n\n.margin-left--4 {\n  margin-left: 4rem;\n}\n\n.margin-left--5 {\n  margin-left: 5rem;\n}\n\n.display--block {\n  display: block;\n}\n\n.display--inline-block {\n  display: inline-block;\n}\n\n.display--inline {\n  display: inline;\n}\n\n.vertical-align--top {\n  vertical-align: top;\n}\n\n.vertical-align--middle {\n  vertical-align: middle;\n}\n\n.vertical-align--bottom {\n  vertical-align: bottom;\n}\n\n.text--truncated {\n  text-overflow: ellipsis;\n}\n\n.text--bold {\n  font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n  font-weight: 700;\n}\n\n.text--italic {\n  font-style: italic;\n}\n\n.text--center {\n  text-align: center;\n}\n\n.label--warning {\n  color: #cd1e0a;\n}\n\n.text--small {\n  font-size: small;\n}\n\n.text--medium {\n  font-size: medium;\n}\n\n.text--large {\n  font-size: large;\n}\n\nbody {\n  font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n  color: #0a0a0a;\n  font-size: 14pt;\n  font-weight: normal;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\ntextarea,\nselect {\n  border: 1px solid #0a0a0a;\n  border-radius: 0.15rem;\n  font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n  color: #0a0a0a;\n  font-size: 14pt;\n  font-weight: normal;\n  -webkit-font-smoothing: antialiased;\n  padding: 0.5rem;\n}\ninput:not([type=radio]),\ntextarea:not([type=radio]),\nselect:not([type=radio]) {\n  width: 100%;\n}\n\nlabel {\n  margin-bottom: 0.25rem;\n  display: block;\n}\n\nlabel[for] {\n  margin-right: 0.5rem;\n}\n\n.has-highlight-divider {\n  text-align: left;\n  margin-bottom: 2rem;\n}\n.has-highlight-divider h1 {\n  margin-bottom: 0;\n}\n\n.stord-highlight-divider {\n  width: 110px;\n  height: 6px;\n  background-color: #1463ff;\n}", "",{"version":3,"sources":["webpack://./src/scss/__spacing.scss","webpack://./src/scss/style.scss","webpack://./src/scss/__display.scss","webpack://./src/scss/__typography.scss","webpack://./src/scss/__variables.scss"],"names":[],"mappings":"AASY;EACI,mBAAA;ACRhB;;ADOY;EACI,mBAAA;ACJhB;;ADGY;EACI,mBAAA;ACAhB;;ADDY;EACI,mBAAA;ACIhB;;ADLY;EACI,mBAAA;ACQhB;;ADLY;EACI,kBAAA;ACQhB;;ADTY;EACI,kBAAA;ACYhB;;ADbY;EACI,kBAAA;ACgBhB;;ADjBY;EACI,kBAAA;ACoBhB;;ADrBY;EACI,kBAAA;ACwBhB;;ADrBY;EACI,aAAA;ACwBhB;;ADzBY;EACI,aAAA;AC4BhB;;AD7BY;EACI,aAAA;ACgChB;;ADjCY;EACI,aAAA;ACoChB;;ADrCY;EACI,aAAA;ACwChB;;ADrCY;EACI,iBAAA;ACwChB;;ADzCY;EACI,iBAAA;AC4ChB;;AD7CY;EACI,iBAAA;ACgDhB;;ADjDY;EACI,iBAAA;ACoDhB;;ADrDY;EACI,iBAAA;ACwDhB;;ADrDY;EACI,mBAAA;ACwDhB;;ADzDY;EACI,mBAAA;AC4DhB;;AD7DY;EACI,mBAAA;ACgEhB;;ADjEY;EACI,mBAAA;ACoEhB;;ADrEY;EACI,mBAAA;ACwEhB;;ADrEY;EACI,oBAAA;ACwEhB;;ADzEY;EACI,oBAAA;AC4EhB;;AD7EY;EACI,oBAAA;ACgFhB;;ADjFY;EACI,oBAAA;ACoFhB;;ADrFY;EACI,oBAAA;ACwFhB;;ADrFY;EACI,kBAAA;ACwFhB;;ADzFY;EACI,kBAAA;AC4FhB;;AD7FY;EACI,kBAAA;ACgGhB;;ADjGY;EACI,kBAAA;ACoGhB;;ADrGY;EACI,kBAAA;ACwGhB;;ADrGY;EACI,YAAA;ACwGhB;;ADzGY;EACI,YAAA;AC4GhB;;AD7GY;EACI,YAAA;ACgHhB;;ADjHY;EACI,YAAA;ACoHhB;;ADrHY;EACI,YAAA;ACwHhB;;ADrHY;EACI,gBAAA;ACwHhB;;ADzHY;EACI,gBAAA;AC4HhB;;AD7HY;EACI,gBAAA;ACgIhB;;ADjIY;EACI,gBAAA;ACoIhB;;ADrIY;EACI,gBAAA;ACwIhB;;ADrIY;EACI,kBAAA;ACwIhB;;ADzIY;EACI,kBAAA;AC4IhB;;AD7IY;EACI,kBAAA;ACgJhB;;ADjJY;EACI,kBAAA;ACoJhB;;ADrJY;EACI,kBAAA;ACwJhB;;ADrJY;EACI,mBAAA;ACwJhB;;ADzJY;EACI,mBAAA;AC4JhB;;AD7JY;EACI,mBAAA;ACgKhB;;ADjKY;EACI,mBAAA;ACoKhB;;ADrKY;EACI,mBAAA;ACwKhB;;ADrKY;EACI,iBAAA;ACwKhB;;ADzKY;EACI,iBAAA;AC4KhB;;AD7KY;EACI,iBAAA;ACgLhB;;ADjLY;EACI,iBAAA;ACoLhB;;ADrLY;EACI,iBAAA;ACwLhB;;AC1OQ;EACI,cAAA;AD6OZ;;AC9OQ;EACI,qBAAA;ADiPZ;;AClPQ;EACI,eAAA;ADqPZ;;AC/OQ;EACI,mBAAA;ADkPZ;;ACnPQ;EACI,sBAAA;ADsPZ;;ACvPQ;EACI,sBAAA;AD0PZ;;AE9PA;EACI,uBAAA;AFiQJ;;AE/PA;EACI,iECVc;EDWd,gBAAA;AFkQJ;;AEhQA;EACI,kBAAA;AFmQJ;;AEjQA;EACI,kBAAA;AFoQJ;;AElQA;EACI,cAAA;AFqQJ;;AEhQQ;EACI,gBAAA;AFmQZ;;AEpQQ;EACI,iBAAA;AFuQZ;;AExQQ;EACI,gBAAA;AF2QZ;;AAlSA;EEHI,iECFgB;EDGhB,cAAA;EACA,eAAA;EACA,mBAAA;EACA,mCAAA;AFySJ;;AArSA;;;EAGI,yBGDY;EHEZ,sBGNK;EDNL,iECFgB;EDGhB,cAAA;EACA,eAAA;EACA,mBAAA;EACA,mCAAA;EHHA,eAAA;ACyTJ;AA3SI;;;EACI,WAAA;AA+SR;;AA5SA;EACI,sBAAA;EACA,cAAA;AA+SJ;;AA7SA;EACI,oBAAA;AAgTJ;;AA7SA;EACI,gBAAA;EACA,mBAAA;AAgTJ;AA/SI;EACI,gBAAA;AAiTR;;AA9SA;EACI,YAAA;EACA,WAAA;EACA,yBAAA;AAiTJ","sourcesContent":["@import \"./_variables\";\n\n@mixin input-padding($value: 5, $measure: \"rem\") {\n    padding: $value + #{$measure};\n}\n\n@mixin spacing-modifiers($orient, $spacing: 5, $measure: \"rem\") {\n    @for $i from 1 through $spacing {\n        @if ($orient == \"vertical\") {\n            .#{$orient}-space--#{$i} {\n                margin-bottom: $i+#{$measure};\n            }\n        } @else if ($orient == \"horizontal\") {\n            .#{$orient}-space--#{$i} {\n                margin-right: $i+#{$measure};\n            }\n        } @else if ( $orient == \"padding\" ) {\n            .#{$orient}--#{$i} {\n                padding: $i + #{$measure};\n            }\n        } @else if ( $orient == \"padding-top\" ){\n            .#{$orient}--#{$i} {\n                #{$orient}: $i + #{$measure};\n            }\n        } @else if ( $orient == \"padding-right\" ){\n            .#{$orient}--#{$i} {\n                #{$orient}: $i + #{$measure};\n            }\n        } @else if ( $orient == \"padding-bottom\" ){\n            .#{$orient}--#{$i} {\n                #{$orient}: $i + #{$measure};\n            }\n        } @else if ( $orient == \"padding-left\" ){\n            .#{$orient}--#{$i} {\n                #{$orient}: $i + #{$measure};\n            }\n        } @else if ( $orient == \"margin\"){\n            .#{$orient}--#{$i} {\n                #{$orient}: $i + #{$measure};\n            }\n        } @else if ( $orient == \"margin-top\"){\n            .#{$orient}--#{$i} {\n                #{$orient}: $i + #{$measure};\n            }\n        } @else if ( $orient == \"margin-right\"){\n            .#{$orient}--#{$i} {\n                #{$orient}: $i + #{$measure};\n            }\n        } @else if ( $orient == \"margin-bottom\"){\n            .#{$orient}--#{$i} {\n                #{$orient}: $i + #{$measure};\n            }\n        } @else if ( $orient == \"margin-left\"){\n            .#{$orient}--#{$i} {\n                #{$orient}: $i + #{$measure};\n            }\n        }\n\n\n    }\n}\n\n@include spacing-modifiers(\"vertical\", 5, \"rem\");\n@include spacing-modifiers(\"horizontal\", 5, \"rem\");\n\n\n// Padding\n@include spacing-modifiers(\"padding\", 5, \"rem\");\n@include spacing-modifiers(\"padding-top\", 5, \"rem\");\n@include spacing-modifiers(\"padding-right\", 5, \"rem\");\n@include spacing-modifiers(\"padding-bottom\", 5, \"rem\");\n@include spacing-modifiers(\"padding-left\", 5, \"rem\");\n\n// Margin\n@include spacing-modifiers(\"margin\", 5, \"rem\");\n@include spacing-modifiers(\"margin-top\", 5, \"rem\");\n@include spacing-modifiers(\"margin-right\", 5, \"rem\");\n@include spacing-modifiers(\"margin-bottom\", 5, \"rem\");\n@include spacing-modifiers(\"margin-left\", 5, \"rem\");\n","@import \"./_variables\";\n@import \"./_spacing\";\n@import \"./_display\";\n@import \"./_typography\";\n\nbody {\n    @include font-style();\n}\n\n// Input Textarea\ninput, \ntextarea, \nselect{\n    border: $input--border;\n    border-radius: $radius;\n    @include font-style();\n    @include input-padding(0.5);\n    &:not([type=\"radio\"]){\n        width: 100%;\n    }\n}\nlabel{\n    margin-bottom: 0.25rem;\n    display: block;\n}\nlabel[for]{\n    margin-right: 0.5rem;\n}\n//DEMO PURPOSES: with custom STORD highlight divder\n.has-highlight-divider{\n    text-align: left;\n    margin-bottom: 2rem;\n    h1{\n        margin-bottom: 0;\n    }\n}\n.stord-highlight-divider {\n    width: 110px;\n    height: 6px;\n    background-color: #1463ff\n}","$types: \"block\", \"inline-block\", \"inline\";\n$alignment: \"top\", \"middle\", \"bottom\";\n@mixin display-modifiers() {\n    @each $type in $types {\n        .display--#{$type}{\n            display: #{$type};\n        }\n    }\n}\n@mixin vertical-align-modifiers() {\n    @each $align in $alignment {\n        .vertical-align--#{$align}{\n            vertical-align: #{$align};\n        }\n    }\n}\n@include display-modifiers();\n@include vertical-align-modifiers();","@import \"./__variables.scss\";\n@mixin font-style {\n    font-family: $body--font-family;\n    color: $body--color;\n    font-size: $body--font-size;\n    font-weight: $body--font-weight;\n    -webkit-font-smoothing: antialiased;\n}\n.text--truncated{\n    text-overflow: ellipsis;\n}\n.text--bold{\n    font-family: $body--font-bold;\n    font-weight: 700;\n}\n.text--italic{\n    font-style: italic;\n}\n.text--center{\n    text-align: center;\n}\n.label--warning{\n    color: #cd1e0a;\n}\n$sizes: \"small\", \"medium\", \"large\";\n@mixin text-size-modifiers() {\n    @each $size in $sizes {\n        .text--#{$size}{\n            font-size: #{$size};\n        }\n    }\n}\n@include text-size-modifiers();","$body--font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n$body--font-light: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n$body--font-bold: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\n$body--color: #0a0a0a;\n$body--font-size: 14pt;\n$body--font-weight: normal;\n$body--background: #f3f3f3;\n\n$radius: 0.15rem;\n\n$border--width: 1px;\n$border--color: $body--color;\n$input--border: $border--width solid $border--color;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/Button/button.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/button.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/Form/form.scss":
/*!***************************************!*\
  !*** ./src/components/Form/form.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./form.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Form/form.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/Input/input.scss":
/*!*****************************************!*\
  !*** ./src/components/Input/input.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./input.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/input.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/Layout/layout.scss":
/*!*******************************************!*\
  !*** ./src/components/Layout/layout.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./layout.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/layout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.js","vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-db300d"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkurl_shortener"] = self["webpackChunkurl_shortener"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9zcmMvY29tcG9uZW50cy9Gb3JtL2luZGV4LmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9zcmMvY29tcG9uZW50cy9JbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L2luZGV4LmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9zcmMvc3RvcmUvY29ubmVjdC5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL3N0b3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9zcmMvc3RvcmUvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9jb21wb25lbnRzL0lucHV0L2lucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9jb21wb25lbnRzL0xheW91dC9sYXlvdXQuc2NzcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2J1dHRvbi5zY3NzP2M0YjQiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9jb21wb25lbnRzL0Zvcm0vZm9ybS5zY3NzP2E3N2EiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9jb21wb25lbnRzL0lucHV0L2lucHV0LnNjc3M/MDkzZiIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dC5zY3NzPzQ0NDEiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiam9pbiIsInRyaW0iLCJGb3JtIiwib25TdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiSW5wdXQiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZUhhbmxkZXIiLCJlIiwiX3ZhbHVlIiwidGFyZ2V0IiwiX3N0b3JlU3RhdGUiLCJzdG9yZSIsIl9tYXBzIiwidXJsTWFwcyIsImVsZW1lbnRWYWx1ZU1hcHMiLCJtYXAiLCJpZCIsInNldE1hcHMiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwiUm93IiwiQ29sdW1ucyIsIkNvbHVtbiIsIkNhcmQiLCJGbGV4Ym94IiwiSDEiLCJIMiIsIlBhcmFncmFwaCIsIkJsb2NrIiwiVGV4dCIsIkxhYmVsIiwiQXBwIiwiX3BhdGhuYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNob3J0VXJsIiwic2V0U2hvcnRVcmwiLCJlbmNvZGVkVXJsIiwic2V0RW5jb2RlZFVybCIsInJhd1VybCIsInNldFJhd1VybCIsImhhc0Vycm9yIiwibWVzc2FnZSIsInNldEhhc0Vycm9yIiwiVXJsU2hvcnRlbmVyIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJzZXRTdGF0ZVNob3J0VXJsIiwic2V0U3RhdGVVcmxNYXBzIiwicmVzZXQiLCJsZW5ndGgiLCJfdXJsSW5NYXBzIiwiZmlsdGVyIiwidXJsTWFwIiwiY29uc29sZSIsImxvZyIsIl91cmkiLCJoYXNoIiwicmVwbGFjZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJzdGF0dXMiLCJvcmlnaW5hbFVybCIsInJlc2V0VXJscyIsIm1ha2VTaG9ydFVybCIsIl9yYXdVcmwiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJlcnJvciIsImhhbmRsZVJlc2V0Iiwib25DaGFuZ2VIYW5kbGVyIiwiX2RhdGEiLCJwdXNoIiwiaGFuZGxlU2hvcnRVcmxNYWtlciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJTRVRfU0hPUlRfVVJMIiwiU0VUX1VSTF9NQVBTIiwiUkVTRVQiLCJDb25uZWN0ZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmFnZSIsInBlcnNpc3RlZFJlZHVjZXIiLCJwZXJzaXN0UmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiY3JlYXRlU3RvcmUiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwicGVyc2lzdG9yIiwicGVyc2lzdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiX3N0YXRlTWFwcyIsImhhc1Nob3J0VXJsSW5NYXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN0QixzQkFBUSx3RUFBWUEsS0FBWjtBQUNSLFFBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFOLElBQWMsUUFEWjtBQUVSLGFBQVMsRUFBRSxDQUFDLFFBQUQsRUFBV0QsS0FBSyxDQUFDRSxTQUFqQixFQUE0QkMsSUFBNUIsQ0FBaUMsR0FBakMsRUFBc0NDLElBQXRDO0FBRkgsS0FBUjtBQUdILENBSkQ7O0FBS0EsaUVBQWVMLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7QUFDQSxJQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFFTCxLQUFGLEVBQWE7QUFDdEIsTUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0JBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBLFdBQU9ELEtBQVA7QUFBYTtBQUNoQixHQUhEOztBQUlBLHNCQUFPLGlIQUNIO0FBQU0sWUFBUSxFQUFFRDtBQUFoQixLQUFxQ04sS0FBckMsR0FDSUEsS0FBSyxDQUFDUyxRQURWLENBREcsQ0FBUDtBQUtI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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSw0Q0FBNEM7V0FDNUM7V0FDQSxFOzs7O1VDcEZBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL2J1dHRvbi5zY3NzXCI7XG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKDxidXR0b24gey4uLnByb3BzfSBcbiAgICB0eXBlPXtwcm9wcy50eXBlIHx8IFwiYnV0dG9uXCJ9XG4gICAgY2xhc3NOYW1lPXtbXCJidXR0b25cIiwgcHJvcHMuY2xhc3NOYW1lXS5qb2luKFwiIFwiKS50cmltKCl9IC8+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9mb3JtLnNjc3NcIjtcbmNvbnN0IEZvcm0gPSAoIHByb3BzICkgPT4ge1xuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7O1xuICAgIH07XG4gICAgcmV0dXJuKDw+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9IHsuLi5wcm9wc30+XG4gICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9mb3JtPlxuPC8+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiU3RvcmVcIjtcbmltcG9ydCBcIi4vaW5wdXQuc2Nzc1wiO1xuY29uc3QgSW5wdXQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZShwcm9wcy52YWx1ZSk7XG4gICAgY29uc3Qgb25DaGFuZ2VIYW5sZGVyID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgX3ZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0IF9zdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgY29uc3QgX21hcHMgPSBfc3RvcmVTdGF0ZS51cmxNYXBzIHx8IHByb3BzLnVybE1hcHMgfHwgW107XG4gICAgICAgIHNldFZhbHVlKCBfdmFsdWUgKTtcbiAgICAgICAgY29uc3QgZWxlbWVudFZhbHVlTWFwcyA9IF9tYXBzLm1hcChtYXAgPT4ge1xuICAgICAgICAgICAgaWYoIG1hcC5pZCA9PT0gcHJvcHMuaWQpe1xuICAgICAgICAgICAgICAgIG1hcC52YWx1ZSA9IF92YWx1ZTtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSggX3ZhbHVlICk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudFZhbHVlTWFwcyAmJiBwcm9wcy5zZXRNYXBzICYmIHByb3BzLnNldE1hcHMoIGVsZW1lbnRWYWx1ZU1hcHMgKTtcbiAgICB9O1xuICAgIHJldHVybiAoPGlucHV0IFxuICAgIHR5cGU9e3Byb3BzLnR5cGUgfHwgXCJ0ZXh0XCJ9XG4gICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcbiAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxuICAgIHZhbHVlPXsgdmFsdWUgfSBcbiAgICBvbkNoYW5nZT17IG9uQ2hhbmdlSGFubGRlciB9XG4gICAgey4uLnByb3BzfVxuICAgIC8+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCJDb21wb25lbnRzL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBcIi4vbGF5b3V0LnNjc3NcIjtcbmNvbnN0IFJvdyA9IChwcm9wcykgPT4geyBcbiAgICByZXR1cm4gKFxuICAgIDxCbG9jayBjbGFzc05hbWU9eyBbXCJyb3dcIiwgcHJvcHMuY2xhc3NOYW1lXS5qb2luKFwiIFwiKS50cmltKCkgfT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQmxvY2s+XG4gICAgKTtcbn07XG5jb25zdCBDb2x1bW5zID0gKHByb3BzKSA9PiB7IFxuICAgIHJldHVybiAoPEJsb2NrIGNsYXNzTmFtZT17IFtcImNvbHVtbnNcIiwgcHJvcHMuY2xhc3NOYW1lXS5qb2luKFwiIFwiKS50cmltKCkgfT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQmxvY2s+KTtcbn07XG5jb25zdCBDb2x1bW4gPSAocHJvcHMpID0+IHsgXG4gICAgcmV0dXJuICg8QmxvY2sgY2xhc3NOYW1lPXsgW1wiY29sdW1uXCIsIHByb3BzLmNsYXNzTmFtZV0uam9pbihcIiBcIikudHJpbSgpIH0+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0Jsb2NrPik7XG59O1xuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4geyBcbiAgICByZXR1cm4gKDxCbG9jayBjbGFzc05hbWU9eyBbXCJjYXJkXCIsIHByb3BzLmNsYXNzTmFtZV0uam9pbihcIiBcIikudHJpbSgpIH0+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0Jsb2NrPik7XG59O1xuXG5jb25zdCBGbGV4Ym94ID0gKHByb3BzKSA9PiB7IFxuICAgIHJldHVybiAoPEJsb2NrIGNsYXNzTmFtZT17IFtcImZsZXhib3hcIiwgcHJvcHMuY2xhc3NOYW1lXS5qb2luKFwiIFwiKS50cmltKCkgfT5cbiAgICAgICAgPEJsb2NrPntwcm9wcy5jaGlsZHJlbn08L0Jsb2NrPlxuICAgIDwvQmxvY2s+KTtcbn07XG5cblxuZXhwb3J0IHsgUm93LCBDb2x1bW5zLCBDb2x1bW4sIENhcmQsIEZsZXhib3ggfTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBIMSA9IChwcm9wcykgPT4geyByZXR1cm4gPGgxIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT57cHJvcHMuY2hpbGRyZW59PC9oMT47fTtcbmNvbnN0IEgyID0gKHByb3BzKSA9PiB7IHJldHVybiA8aDIgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9Pntwcm9wcy5jaGlsZHJlbn08L2gyPjt9O1xuY29uc3QgUGFyYWdyYXBoID0gKHByb3BzKSA9PiB7IHJldHVybiA8cCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+e3Byb3BzLmNoaWxkcmVufTwvcD47fTtcbmNvbnN0IEJsb2NrID0gKHByb3BzKSA9PiB7IHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+O307XG5jb25zdCBUZXh0ID0gKHByb3BzKSA9PiB7IHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47fTtcbmNvbnN0IExhYmVsID0gKHByb3BzKSA9PiB7IHJldHVybiA8bGFiZWwgaHRtbEZvcj17cHJvcHMuZm9yfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+e3Byb3BzLmNoaWxkcmVufTwvbGFiZWw+O307XG5leHBvcnQgeyBIMSwgSDIsIFBhcmFncmFwaCwgQmxvY2ssIFRleHQsIExhYmVsIH07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJTdG9yZVwiO1xuaW1wb3J0IENvbm5lY3RlZCBmcm9tIFwiU3RvcmUvY29ubmVjdFwiO1xuaW1wb3J0IHsgQ29sdW1ucywgQ29sdW1uLCBSb3csIEZsZXhib3ggfSBmcm9tIFwiQ29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEgxLCBQYXJhZ3JhcGgsIEJsb2NrLCBUZXh0IH0gZnJvbSBcIkNvbXBvbmVudHMvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIkNvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQ29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiQ29tcG9uZW50cy9JbnB1dFwiO1xuaW1wb3J0IHtcbiAgICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgICBTd2l0Y2gsXG4gICAgUm91dGUsIFxuICAgIHVzZUhpc3RvcnlcbiAgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFwiU2Nzcy9zdHlsZS5zY3NzXCI7XG5mdW5jdGlvbiBBcHAoKSB7XG5cbiAgICBjb25zdCBfcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgW3Nob3J0VXJsLCBzZXRTaG9ydFVybF0gPSB1c2VTdGF0ZSggX3BhdGhuYW1lID09PSBcIi9cIiA/IFwiXCIgIDogX3BhdGhuYW1lICk7XG4gICAgY29uc3QgW2VuY29kZWRVcmwsIHNldEVuY29kZWRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Jhd1VybCwgc2V0UmF3VXJsXSA9IHVzZVN0YXRlKHNob3J0VXJsIHx8IFwiXCIpO1xuICAgIGNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3IgXSA9IHVzZVN0YXRlKHsgaGFzRXJyb3I6IGZhbHNlLCBtZXNzYWdlOiBcIlwifSk7XG5cbiAgICBjb25zdCBVcmxTaG9ydGVuZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29ubmVjdGVkIGRhdGE9eyB7XCJzaG9ydFVybFwiOiBzaG9ydFVybCwgXCJoYXNoXCI6IGVuY29kZWRVcmwgfSB9IFxuICAgICAgICAgICAgcmVuZGVyPXsgKCB7IHVybE1hcHMsIHNldFN0YXRlU2hvcnRVcmwsIHNldFN0YXRlVXJsTWFwcywgcmVzZXQgfSApID0+IHtcblxuICAgICAgICAgICAgaWYodXJsTWFwcyAmJiB1cmxNYXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vR2V0IGhhc2ggZnJvbSBsb2NhbCBzdG9yYWdlIHVybE1hcHNcbiAgICAgICAgICAgICAgICBjb25zdCBfdXJsSW5NYXBzID0gdXJsTWFwcy5maWx0ZXIoKHVybE1hcCkgPT4gdXJsTWFwLnNob3J0VXJsID09PSBfcGF0aG5hbWUpWzBdO1xuICAgICAgICAgICAgICAgIGlmKCBfdXJsSW5NYXBzICkgY29uc29sZS5sb2coX3VybEluTWFwcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgX3VyaSA9ICgoX3VybEluTWFwcyAmJiBfdXJsSW5NYXBzLmhhc2gpIHx8IF9wYXRobmFtZS5yZXBsYWNlKFwiL1wiLCBcIlwiKSkucmVwbGFjZShcIi9cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgLy9HZXQgb3JpZ2luYWwgbG9uZyBVUkwgZnJvbSBzaG9ydCBVUkwvaGFzaFxuICAgICAgICAgICAgICAgIGlmKF91cmkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjkwMDAvbG9uZy9cIiArIF91cmksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtzdGF0dXMsIG9yaWdpbmFsVXJsLCBoYXNofSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHN0YXR1cyA9PT0gMjAwICYmIG9yaWdpbmFsVXJsICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmF3VXJsKG9yaWdpbmFsVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzZXRVcmxzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3J0VXJsKFwiXCIpOyBcbiAgICAgICAgICAgICAgICBzZXRFbmNvZGVkVXJsKFwiXCIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbWFrZVNob3J0VXJsID0gKCBfcmF3VXJsICkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9zaG9ydFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcInVybFwiIDogX3Jhd1VybCB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNob3J0VXJsLCBoYXNoLCBoYXNFcnJvciwgbWVzc2FnZSB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGhhc0Vycm9yICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXNFcnJvciggeyBcImhhc0Vycm9yXCI6IGhhc0Vycm9yLCBcIm1lc3NhZ2VcIjogbWVzc2FnZSB9ICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXNFcnJvciggeyBcImhhc0Vycm9yXCI6IGZhbHNlLCBcIm1lc3NhZ2VcIjogXCJcIiB9ICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc2hvcnRVcmwsIGhhc2ggfTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgXCJoYXNFcnJvclwiOiB0cnVlLCBcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiT3VyIHNlcnZpY2UgaXMgZmVlbGluZyB1bmRlciB0aGUgd2VhdGhlci4gV2UnbGwgYmUgYmFjayBiZXR0ZXIgc29vbi5cIiB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzZXRSYXdVcmwoXCJcIik7XG4gICAgICAgICAgICAgICAgcmVzZXRVcmxzKCk7XG4gICAgICAgICAgICAgICAgLy8gaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgX2RhdGEgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBzZXRSYXdVcmwoX2RhdGEpO1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVNob3J0VXJsTWFrZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1ha2VTaG9ydFVybCggcmF3VXJsIClcbiAgICAgICAgICAgICAgICAudGhlbigoe3Nob3J0VXJsLCBoYXNoLCBoYXNFcnJvciwgbWVzc2FnZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggc2hvcnRVcmwgJiYgaGFzaCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlU2hvcnRVcmwoIHsgc2hvcnRVcmwsIGhhc2ggfSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGVVcmxNYXBzKCB7IHNob3J0VXJsLCBoYXNoIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3J0VXJsKCBzaG9ydFVybCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW5jb2RlZFVybCggaGFzaCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmF3VXJsKCBzaG9ydFVybCAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhc0Vycm9yKCB7IFwiaGFzRXJyb3JcIjogZmFsc2UsIFwibWVzc2FnZVwiOiBcIlwiIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNFcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXNFcnJvciggeyBcImhhc0Vycm9yXCI6IGhhc0Vycm9yLCBcIm1lc3NhZ2VcIjogbWVzc2FnZSB9ICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaGlzdG9yeS5wdXNoKCB1cmwgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sdW1ucz5cbiAgICAgICAgICAgIDxDb2x1bW4gY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPEZsZXhib3ggY2xhc3NOYW1lPVwidGV4dC0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCbG9jayBjbGFzc05hbWU9XCJoYXMtaGlnaGxpZ2h0LWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEgxPlVSTCBTaG9ydGVuZXI8L0gxPlxuICAgICAgICAgICAgICAgICAgICA8QmxvY2sgY2xhc3NOYW1lPVwic3RvcmQtaGlnaGxpZ2h0LWRpdmlkZXJcIj48L0Jsb2NrPlxuICAgICAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcIndpZHRoXCI6IFwiMjNyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jhd1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybE1hcHM9e3VybE1hcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1zcGFjZS0tMiB0ZXh0LS10cnVuY2F0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9dXJsK3Nob3J0ZW5lciZvcT1nb29nbGUrdSZhcXM9Y2hyb21lLjAuNjlpNTlqNjlpNjBsM2owajY5aTU3LjEwNjlqMGo3JnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgeyA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXJhd1VybCB8fCAoaGFzRXJyb3IgJiYgaGFzRXJyb3IuaGFzRXJyb3IpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IGhhbmRsZVJlc2V0IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IFwiQ2xlYXJcIiB9PC9CdXR0b24+fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnkgc3RvcmQgbWFyZ2luLWxlZnQtLTJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcmF3VXJsIHx8IChoYXNFcnJvciAmJiBoYXNFcnJvci5oYXNFcnJvcil9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgaGFuZGxlU2hvcnRVcmxNYWtlciB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcIlNob3J0ZW4gaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaGFzRXJyb3IgJiYgaGFzRXJyb3IubWVzc2FnZSkgJiYgKDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwibGFiZWwtLXdhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc0Vycm9yICYmIGhhc0Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvRmxleGJveD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICAgPC9Db2x1bW5zPlxuICAgICAgICA8L1Jvdz4pOyB9fSAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8Lz4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKDw+XG4gICAgPFJvdXRlcj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e1VybFNob3J0ZW5lcn0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Sb3V0ZXI+XG4gICAgPC8+KTtcbn1cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpOyIsIlxuaW1wb3J0IHsgU0VUX1NIT1JUX1VSTCwgU0VUX1VSTF9NQVBTLCBSRVNFVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuY29uc3Qgc2V0U3RhdGVTaG9ydFVybCA9ICggc2hvcnRVcmwgKSA9PiB7XG4gICAgcmV0dXJuIHsgXG4gICAgICB0eXBlOiBTRVRfU0hPUlRfVVJMLCBcbiAgICAgIHNob3J0VXJsOiBzaG9ydFVybCBcbiAgICB9O1xufTtcbmNvbnN0IHNldFN0YXRlVXJsTWFwcyA9ICggc2hvcnRVcmwgKSA9PiB7XG4gICAgcmV0dXJuIHsgXG4gICAgICB0eXBlOiBTRVRfVVJMX01BUFMsIFxuICAgICAgc2hvcnRVcmw6IHNob3J0VXJsIFxuICAgIH07XG59O1xuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHR5cGU6IFJFU0VUXG4gICAgfTtcbn07XG5leHBvcnQgeyBzZXRTdGF0ZVNob3J0VXJsLCBzZXRTdGF0ZVVybE1hcHMsIHJlc2V0IH07IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiU3RvcmVcIjtcbmltcG9ydCB7IHNldFN0YXRlU2hvcnRVcmwsIHNldFN0YXRlVXJsTWFwcywgcmVzZXQgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5jb25zdCBDb25uZWN0ZWQgPSAoIHByb3BzICkgPT4ge1xuICAvLyBjb25zdCBfc3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIC8vIGxldCBzaG9ydFVybEluTWFwcyA9IHByb3BzLmRhdGE7XG4gIC8vIGlmKHByb3BzLmRhdGEudXJsKXtcbiAgLy8gICBjb25zdCB1cmxJbk1hcHMgPSBfc3RvcmVTdGF0ZS51cmxNYXBzLmZpbHRlcigodXJsTWFwKSA9PiB1cmxNYXAudXJsID09PSBwcm9wcy5kYXRhLnVybCApWzBdO1xuICAvLyAgIGlmKCB1cmxJbk1hcHMgKSBzaG9ydFVybEluTWFwcyA9IHVybEluTWFwcztcbiAgLy8gfVxuICAvLyBwcm9wcy5zZXRTdGF0ZVNob3J0VXJsICYmIHByb3BzLnNldFN0YXRlU2hvcnRVcmwoc2hvcnRVcmxJbk1hcHMpOyAvL3NldCBpbml0aWFsIGRhdGEgdG8gbWFwcyBcbiAgcmV0dXJuIHByb3BzLnJlbmRlciAmJiBwcm9wcy5yZW5kZXIocHJvcHMpO1xufTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSAvKiwgb3duUHJvcHMqLykgPT4ge1xuICByZXR1cm4ge1xuICAgIHNob3J0VXJsOiBzdGF0ZS5zaG9ydFVybCxcbiAgICB1cmxNYXBzOiBzdGF0ZS51cmxNYXBzXG4gIH07XG59O1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBzZXRTdGF0ZVNob3J0VXJsLCBzZXRTdGF0ZVVybE1hcHMsIHJlc2V0IH07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShDb25uZWN0ZWQpOyIsImV4cG9ydCBjb25zdCBTRVRfU0hPUlRfVVJMID0gXCJTRVRfU0hPUlRfVVJMXCI7XG5leHBvcnQgY29uc3QgU0VUX1VSTF9NQVBTID0gXCJTRVRfVVJMX01BUFNcIjtcbmV4cG9ydCBjb25zdCBSRVNFVCA9IFwiUkVTRVRcIjsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiOyAvLyBkZWZhdWx0cyB0byBsb2NhbFN0b3JhZ2UgZm9yIHdlYlxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICAgIGtleTogXCJ1cmwtc2hvcnRlbmVyXCIsXG4gICAgc3RvcmFnZSxcbn07XG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIFxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcbik7XG5sZXQgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcbmV4cG9ydCB7IHN0b3JlLCBwZXJzaXN0b3IgfTsiLCJpbXBvcnQgeyBTRVRfU0hPUlRfVVJMLCBTRVRfVVJMX01BUFMsIFJFU0VUIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXJsTWFwczogW10sXG4gICAgc2hvcnRVcmw6IHtcbiAgICAgICAgc2hvcnRVcmw6IG51bGwsXG4gICAgICAgIGhhc2g6IG51bGxcbiAgICB9XG59O1xuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBTRVRfU0hPUlRfVVJMIDoge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgc2hvcnRVcmw6IGFjdGlvbi5zaG9ydFVybFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTRVRfVVJMX01BUFMgOiB7XG4gICAgICAgICAgICBsZXQgX3N0YXRlTWFwcyA9IFsuLi5zdGF0ZS51cmxNYXBzXTtcbiAgICAgICAgICAgIGNvbnN0IGhhc1Nob3J0VXJsSW5NYXBzID0gX3N0YXRlTWFwcy5maWx0ZXIoKHVybE1hcCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cmxNYXAuaGFzaCA9PT0gYWN0aW9uLnNob3J0VXJsLmhhc2g7XG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9zdGF0ZU1hcHMsIGhhc1Nob3J0VXJsSW5NYXBzKTtcbiAgICAgICAgICAgIGlmKCAhaGFzU2hvcnRVcmxJbk1hcHMgKSBfc3RhdGVNYXBzLnB1c2goIGFjdGlvbi5zaG9ydFVybCApO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgdXJsTWFwczogX3N0YXRlTWFwc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBSRVNFVCA6IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dC0tdHJ1bmNhdGVkIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udGV4dC0tYm9sZCB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50ZXh0LS1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGV4dC0tY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxhYmVsLS13YXJuaW5nIHtcXG4gIGNvbG9yOiAjY2QxZTBhO1xcbn1cXG5cXG4udGV4dC0tc21hbGwge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuLnRleHQtLW1lZGl1bSB7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG59XFxuXFxuLnRleHQtLWxhcmdlIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwYTBhMGE7XFxuICBmb250LXNpemU6IDE0cHQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG59XFxuXFxuLmJ1dHRvbi5wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDYzZmY7XFxuICBjb2xvcjogI2ZlZmVmZTtcXG4gIGJvcmRlci1jb2xvcjogIzE0NjNmZjtcXG59XFxuXFxuLmJ1dHRvbi5zdG9yZCB7XFxuICBib3gtc2hhZG93OiA2cHggNnB4IDAgIzAxMGUxODtcXG4gIHRyYW5zaXRpb246IDAuNHMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVFBO0VBQ0ksdUJBQUE7QUNQSjs7QURTQTtFQUNJLGlFRVZjO0VGV2QsZ0JBQUE7QUNOSjs7QURRQTtFQUNJLGtCQUFBO0FDTEo7O0FET0E7RUFDSSxrQkFBQTtBQ0pKOztBRE1BO0VBQ0ksY0FBQTtBQ0hKOztBRFFRO0VBQ0ksZ0JBQUE7QUNMWjs7QURJUTtFQUNJLGlCQUFBO0FDRFo7O0FEQVE7RUFDSSxnQkFBQTtBQ0daOztBQTlCQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQWlDSjs7QUEvQkE7RURISSxpRUVGZ0I7RUZHaEIsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VDQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQ0ZLO0VER0wsc0JBQUE7QUFzQ0o7O0FBcENBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUF1Q0o7O0FBaENBO0VBQ0ksNkJBQUE7RUFDQSwrQ0FBQTtBQW1DSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL19fdmFyaWFibGVzLnNjc3NcXFwiO1xcbkBtaXhpbiBmb250LXN0eWxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICRib2R5LS1mb250LWZhbWlseTtcXG4gICAgY29sb3I6ICRib2R5LS1jb2xvcjtcXG4gICAgZm9udC1zaXplOiAkYm9keS0tZm9udC1zaXplO1xcbiAgICBmb250LXdlaWdodDogJGJvZHktLWZvbnQtd2VpZ2h0O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLnRleHQtLXRydW5jYXRlZHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi50ZXh0LS1ib2xke1xcbiAgICBmb250LWZhbWlseTogJGJvZHktLWZvbnQtYm9sZDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnRleHQtLWl0YWxpY3tcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udGV4dC0tY2VudGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5sYWJlbC0td2FybmluZ3tcXG4gICAgY29sb3I6ICNjZDFlMGE7XFxufVxcbiRzaXplczogXFxcInNtYWxsXFxcIiwgXFxcIm1lZGl1bVxcXCIsIFxcXCJsYXJnZVxcXCI7XFxuQG1peGluIHRleHQtc2l6ZS1tb2RpZmllcnMoKSB7XFxuICAgIEBlYWNoICRzaXplIGluICRzaXplcyB7XFxuICAgICAgICAudGV4dC0tI3skc2l6ZX17XFxuICAgICAgICAgICAgZm9udC1zaXplOiAjeyRzaXplfTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5AaW5jbHVkZSB0ZXh0LXNpemUtbW9kaWZpZXJzKCk7XCIsXCJAaW1wb3J0IFxcXCJTY3NzL19fdHlwb2dyYXBoeS5zY3NzXFxcIjtcXG5idXR0b246ZGlzYWJsZWR7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuLmJ1dHRvbntcXG4gICAgQGluY2x1ZGUgZm9udC1zdHlsZSgpO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbn1cXG4uYnV0dG9uLnByaW1hcnl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDYzZmY7XFxuICAgIGNvbG9yOiAjZmVmZWZlO1xcbiAgICBib3JkZXItY29sb3I6ICMxNDYzZmY7XFxuICAgIC8vIGJhY2tncm91bmQ6ICM0NTdmY2E7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxuICAgIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU2OTFjOCwgIzQ1N2ZjYSk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTY5MWM4LCAjNDU3ZmNhKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcbiAgICAvLyBjb2xvcjogI2YxZjFmMTtcXG4gICAgLy8gYm9yZGVyLWNvbG9yOiAjNTQ4ZmM4O1xcbn1cXG4uYnV0dG9uLnN0b3Jke1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDAgIzAxMGUxODtcXG4gICAgdHJhbnNpdGlvbjogLjRzIGN1YmljLWJlemllciguMiwuOCwuMiwxKTtcXG59XCIsXCIkYm9keS0tZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuJGJvZHktLWZvbnQtbGlnaHQ6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuJGJvZHktLWZvbnQtYm9sZDogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4kYm9keS0tY29sb3I6ICMwYTBhMGE7XFxuJGJvZHktLWZvbnQtc2l6ZTogMTRwdDtcXG4kYm9keS0tZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4kYm9keS0tYmFja2dyb3VuZDogI2YzZjNmMztcXG5cXG4kcmFkaXVzOiAwLjE1cmVtO1xcblxcbiRib3JkZXItLXdpZHRoOiAxcHg7XFxuJGJvcmRlci0tY29sb3I6ICRib2R5LS1jb2xvcjtcXG4kaW5wdXQtLWJvcmRlcjogJGJvcmRlci0td2lkdGggc29saWQgJGJvcmRlci0tY29sb3I7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcmQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5jb2x1bW4uY29sLTEyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29sdW1uLmNvbC00IHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbi5jb2x1bW4uY29sLTMge1xcbiAgd2lkdGg6IDMzLjMzJTtcXG59XFxuXFxuLmZsZXhib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2xheW91dC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFESTtFQUNJLFdBQUE7QUFHUjtBQURJO0VBQ0ksVUFBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0FBR1I7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJke1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLmNvbHVtbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICAmLmNvbC0xMntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgICYuY29sLTR7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICB9XFxuICAgICYuY29sLTN7XFxuICAgICAgICB3aWR0aDogMzMuMzMlO1xcbiAgICB9XFxufVxcbi5mbGV4Ym94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnZlcnRpY2FsLXNwYWNlLS0xIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi52ZXJ0aWNhbC1zcGFjZS0tMiB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udmVydGljYWwtc3BhY2UtLTMge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLnZlcnRpY2FsLXNwYWNlLS00IHtcXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbi52ZXJ0aWNhbC1zcGFjZS0tNSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1zcGFjZS0tMSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5ob3Jpem9udGFsLXNwYWNlLS0yIHtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLmhvcml6b250YWwtc3BhY2UtLTMge1xcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1zcGFjZS0tNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxufVxcblxcbi5ob3Jpem9udGFsLXNwYWNlLS01IHtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG59XFxuXFxuLnBhZGRpbmctLTEge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnBhZGRpbmctLTIge1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnBhZGRpbmctLTMge1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLnBhZGRpbmctLTQge1xcbiAgcGFkZGluZzogNHJlbTtcXG59XFxuXFxuLnBhZGRpbmctLTUge1xcbiAgcGFkZGluZzogNXJlbTtcXG59XFxuXFxuLnBhZGRpbmctdG9wLS0xIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4ucGFkZGluZy10b3AtLTIge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5wYWRkaW5nLXRvcC0tMyB7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG59XFxuXFxuLnBhZGRpbmctdG9wLS00IHtcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcbn1cXG5cXG4ucGFkZGluZy10b3AtLTUge1xcbiAgcGFkZGluZy10b3A6IDVyZW07XFxufVxcblxcbi5wYWRkaW5nLXJpZ2h0LS0xIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5wYWRkaW5nLXJpZ2h0LS0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcblxcbi5wYWRkaW5nLXJpZ2h0LS0zIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxufVxcblxcbi5wYWRkaW5nLXJpZ2h0LS00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07XFxufVxcblxcbi5wYWRkaW5nLXJpZ2h0LS01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XFxufVxcblxcbi5wYWRkaW5nLWJvdHRvbS0tMSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnBhZGRpbmctYm90dG9tLS0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucGFkZGluZy1ib3R0b20tLTMge1xcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcblxcbi5wYWRkaW5nLWJvdHRvbS0tNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG59XFxuXFxuLnBhZGRpbmctYm90dG9tLS01IHtcXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4ucGFkZGluZy1sZWZ0LS0xIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnBhZGRpbmctbGVmdC0tMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5wYWRkaW5nLWxlZnQtLTMge1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbn1cXG5cXG4ucGFkZGluZy1sZWZ0LS00IHtcXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcXG59XFxuXFxuLnBhZGRpbmctbGVmdC0tNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxufVxcblxcbi5tYXJnaW4tLTEge1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4ubWFyZ2luLS0yIHtcXG4gIG1hcmdpbjogMnJlbTtcXG59XFxuXFxuLm1hcmdpbi0tMyB7XFxuICBtYXJnaW46IDNyZW07XFxufVxcblxcbi5tYXJnaW4tLTQge1xcbiAgbWFyZ2luOiA0cmVtO1xcbn1cXG5cXG4ubWFyZ2luLS01IHtcXG4gIG1hcmdpbjogNXJlbTtcXG59XFxuXFxuLm1hcmdpbi10b3AtLTEge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLm1hcmdpbi10b3AtLTIge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLm1hcmdpbi10b3AtLTMge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLm1hcmdpbi10b3AtLTQge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuXFxuLm1hcmdpbi10b3AtLTUge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxuLm1hcmdpbi1yaWdodC0tMSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5tYXJnaW4tcmlnaHQtLTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4ubWFyZ2luLXJpZ2h0LS0zIHtcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXG59XFxuXFxuLm1hcmdpbi1yaWdodC0tNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxufVxcblxcbi5tYXJnaW4tcmlnaHQtLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbn1cXG5cXG4ubWFyZ2luLWJvdHRvbS0tMSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubWFyZ2luLWJvdHRvbS0tMiB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWFyZ2luLWJvdHRvbS0tMyB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ubWFyZ2luLWJvdHRvbS0tNCB7XFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4ubWFyZ2luLWJvdHRvbS0tNSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4ubWFyZ2luLWxlZnQtLTEge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5tYXJnaW4tbGVmdC0tMiB7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLm1hcmdpbi1sZWZ0LS0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbn1cXG5cXG4ubWFyZ2luLWxlZnQtLTQge1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxufVxcblxcbi5tYXJnaW4tbGVmdC0tNSB7XFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXG59XFxuXFxuLmRpc3BsYXktLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZGlzcGxheS0taW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmRpc3BsYXktLWlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi52ZXJ0aWNhbC1hbGlnbi0tdG9wIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi52ZXJ0aWNhbC1hbGlnbi0tbWlkZGxlIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi52ZXJ0aWNhbC1hbGlnbi0tYm90dG9tIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcblxcbi50ZXh0LS10cnVuY2F0ZWQge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50ZXh0LS1ib2xkIHtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRleHQtLWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50ZXh0LS1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGFiZWwtLXdhcm5pbmcge1xcbiAgY29sb3I6ICNjZDFlMGE7XFxufVxcblxcbi50ZXh0LS1zbWFsbCB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4udGV4dC0tbWVkaXVtIHtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG4udGV4dC0tbGFyZ2Uge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgZm9udC1zaXplOiAxNHB0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVyZW07XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgZm9udC1zaXplOiAxNHB0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5pbnB1dDpub3QoW3R5cGU9cmFkaW9dKSxcXG50ZXh0YXJlYTpub3QoW3R5cGU9cmFkaW9dKSxcXG5zZWxlY3Q6bm90KFt0eXBlPXJhZGlvXSkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxubGFiZWxbZm9yXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmhhcy1oaWdobGlnaHQtZGl2aWRlciB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLmhhcy1oaWdobGlnaHQtZGl2aWRlciBoMSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uc3RvcmQtaGlnaGxpZ2h0LWRpdmlkZXIge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2M2ZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fX3NwYWNpbmcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX19kaXNwbGF5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNZO0VBQ0ksbUJBQUE7QUNSaEI7O0FET1k7RUFDSSxtQkFBQTtBQ0poQjs7QURHWTtFQUNJLG1CQUFBO0FDQWhCOztBRERZO0VBQ0ksbUJBQUE7QUNJaEI7O0FETFk7RUFDSSxtQkFBQTtBQ1FoQjs7QURMWTtFQUNJLGtCQUFBO0FDUWhCOztBRFRZO0VBQ0ksa0JBQUE7QUNZaEI7O0FEYlk7RUFDSSxrQkFBQTtBQ2dCaEI7O0FEakJZO0VBQ0ksa0JBQUE7QUNvQmhCOztBRHJCWTtFQUNJLGtCQUFBO0FDd0JoQjs7QURyQlk7RUFDSSxhQUFBO0FDd0JoQjs7QUR6Qlk7RUFDSSxhQUFBO0FDNEJoQjs7QUQ3Qlk7RUFDSSxhQUFBO0FDZ0NoQjs7QURqQ1k7RUFDSSxhQUFBO0FDb0NoQjs7QURyQ1k7RUFDSSxhQUFBO0FDd0NoQjs7QURyQ1k7RUFDSSxpQkFBQTtBQ3dDaEI7O0FEekNZO0VBQ0ksaUJBQUE7QUM0Q2hCOztBRDdDWTtFQUNJLGlCQUFBO0FDZ0RoQjs7QURqRFk7RUFDSSxpQkFBQTtBQ29EaEI7O0FEckRZO0VBQ0ksaUJBQUE7QUN3RGhCOztBRHJEWTtFQUNJLG1CQUFBO0FDd0RoQjs7QUR6RFk7RUFDSSxtQkFBQTtBQzREaEI7O0FEN0RZO0VBQ0ksbUJBQUE7QUNnRWhCOztBRGpFWTtFQUNJLG1CQUFBO0FDb0VoQjs7QURyRVk7RUFDSSxtQkFBQTtBQ3dFaEI7O0FEckVZO0VBQ0ksb0JBQUE7QUN3RWhCOztBRHpFWTtFQUNJLG9CQUFBO0FDNEVoQjs7QUQ3RVk7RUFDSSxvQkFBQTtBQ2dGaEI7O0FEakZZO0VBQ0ksb0JBQUE7QUNvRmhCOztBRHJGWTtFQUNJLG9CQUFBO0FDd0ZoQjs7QURyRlk7RUFDSSxrQkFBQTtBQ3dGaEI7O0FEekZZO0VBQ0ksa0JBQUE7QUM0RmhCOztBRDdGWTtFQUNJLGtCQUFBO0FDZ0doQjs7QURqR1k7RUFDSSxrQkFBQTtBQ29HaEI7O0FEckdZO0VBQ0ksa0JBQUE7QUN3R2hCOztBRHJHWTtFQUNJLFlBQUE7QUN3R2hCOztBRHpHWTtFQUNJLFlBQUE7QUM0R2hCOztBRDdHWTtFQUNJLFlBQUE7QUNnSGhCOztBRGpIWTtFQUNJLFlBQUE7QUNvSGhCOztBRHJIWTtFQUNJLFlBQUE7QUN3SGhCOztBRHJIWTtFQUNJLGdCQUFBO0FDd0hoQjs7QUR6SFk7RUFDSSxnQkFBQTtBQzRIaEI7O0FEN0hZO0VBQ0ksZ0JBQUE7QUNnSWhCOztBRGpJWTtFQUNJLGdCQUFBO0FDb0loQjs7QURySVk7RUFDSSxnQkFBQTtBQ3dJaEI7O0FEcklZO0VBQ0ksa0JBQUE7QUN3SWhCOztBRHpJWTtFQUNJLGtCQUFBO0FDNEloQjs7QUQ3SVk7RUFDSSxrQkFBQTtBQ2dKaEI7O0FEakpZO0VBQ0ksa0JBQUE7QUNvSmhCOztBRHJKWTtFQUNJLGtCQUFBO0FDd0poQjs7QURySlk7RUFDSSxtQkFBQTtBQ3dKaEI7O0FEekpZO0VBQ0ksbUJBQUE7QUM0SmhCOztBRDdKWTtFQUNJLG1CQUFBO0FDZ0toQjs7QURqS1k7RUFDSSxtQkFBQTtBQ29LaEI7O0FEcktZO0VBQ0ksbUJBQUE7QUN3S2hCOztBRHJLWTtFQUNJLGlCQUFBO0FDd0toQjs7QUR6S1k7RUFDSSxpQkFBQTtBQzRLaEI7O0FEN0tZO0VBQ0ksaUJBQUE7QUNnTGhCOztBRGpMWTtFQUNJLGlCQUFBO0FDb0xoQjs7QURyTFk7RUFDSSxpQkFBQTtBQ3dMaEI7O0FDMU9RO0VBQ0ksY0FBQTtBRDZPWjs7QUM5T1E7RUFDSSxxQkFBQTtBRGlQWjs7QUNsUFE7RUFDSSxlQUFBO0FEcVBaOztBQy9PUTtFQUNJLG1CQUFBO0FEa1BaOztBQ25QUTtFQUNJLHNCQUFBO0FEc1BaOztBQ3ZQUTtFQUNJLHNCQUFBO0FEMFBaOztBRTlQQTtFQUNJLHVCQUFBO0FGaVFKOztBRS9QQTtFQUNJLGlFQ1ZjO0VEV2QsZ0JBQUE7QUZrUUo7O0FFaFFBO0VBQ0ksa0JBQUE7QUZtUUo7O0FFalFBO0VBQ0ksa0JBQUE7QUZvUUo7O0FFbFFBO0VBQ0ksY0FBQTtBRnFRSjs7QUVoUVE7RUFDSSxnQkFBQTtBRm1RWjs7QUVwUVE7RUFDSSxpQkFBQTtBRnVRWjs7QUV4UVE7RUFDSSxnQkFBQTtBRjJRWjs7QUFsU0E7RUVISSxpRUNGZ0I7RURHaEIsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FGeVNKOztBQXJTQTs7O0VBR0kseUJHRFk7RUhFWixzQkdOSztFRE5MLGlFQ0ZnQjtFREdoQixjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUhIQSxlQUFBO0FDeVRKO0FBM1NJOzs7RUFDSSxXQUFBO0FBK1NSOztBQTVTQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQStTSjs7QUE3U0E7RUFDSSxvQkFBQTtBQWdUSjs7QUE3U0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBZ1RKO0FBL1NJO0VBQ0ksZ0JBQUE7QUFpVFI7O0FBOVNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQWlUSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL192YXJpYWJsZXNcXFwiO1xcblxcbkBtaXhpbiBpbnB1dC1wYWRkaW5nKCR2YWx1ZTogNSwgJG1lYXN1cmU6IFxcXCJyZW1cXFwiKSB7XFxuICAgIHBhZGRpbmc6ICR2YWx1ZSArICN7JG1lYXN1cmV9O1xcbn1cXG5cXG5AbWl4aW4gc3BhY2luZy1tb2RpZmllcnMoJG9yaWVudCwgJHNwYWNpbmc6IDUsICRtZWFzdXJlOiBcXFwicmVtXFxcIikge1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRzcGFjaW5nIHtcXG4gICAgICAgIEBpZiAoJG9yaWVudCA9PSBcXFwidmVydGljYWxcXFwiKSB7XFxuICAgICAgICAgICAgLiN7JG9yaWVudH0tc3BhY2UtLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJGkrI3skbWVhc3VyZX07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSBAZWxzZSBpZiAoJG9yaWVudCA9PSBcXFwiaG9yaXpvbnRhbFxcXCIpIHtcXG4gICAgICAgICAgICAuI3skb3JpZW50fS1zcGFjZS0tI3skaX0ge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRpKyN7JG1lYXN1cmV9O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gQGVsc2UgaWYgKCAkb3JpZW50ID09IFxcXCJwYWRkaW5nXFxcIiApIHtcXG4gICAgICAgICAgICAuI3skb3JpZW50fS0tI3skaX0ge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAkaSArICN7JG1lYXN1cmV9O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gQGVsc2UgaWYgKCAkb3JpZW50ID09IFxcXCJwYWRkaW5nLXRvcFxcXCIgKXtcXG4gICAgICAgICAgICAuI3skb3JpZW50fS0tI3skaX0ge1xcbiAgICAgICAgICAgICAgICAjeyRvcmllbnR9OiAkaSArICN7JG1lYXN1cmV9O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gQGVsc2UgaWYgKCAkb3JpZW50ID09IFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiApe1xcbiAgICAgICAgICAgIC4jeyRvcmllbnR9LS0jeyRpfSB7XFxuICAgICAgICAgICAgICAgICN7JG9yaWVudH06ICRpICsgI3skbWVhc3VyZX07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSBAZWxzZSBpZiAoICRvcmllbnQgPT0gXFxcInBhZGRpbmctYm90dG9tXFxcIiApe1xcbiAgICAgICAgICAgIC4jeyRvcmllbnR9LS0jeyRpfSB7XFxuICAgICAgICAgICAgICAgICN7JG9yaWVudH06ICRpICsgI3skbWVhc3VyZX07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSBAZWxzZSBpZiAoICRvcmllbnQgPT0gXFxcInBhZGRpbmctbGVmdFxcXCIgKXtcXG4gICAgICAgICAgICAuI3skb3JpZW50fS0tI3skaX0ge1xcbiAgICAgICAgICAgICAgICAjeyRvcmllbnR9OiAkaSArICN7JG1lYXN1cmV9O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gQGVsc2UgaWYgKCAkb3JpZW50ID09IFxcXCJtYXJnaW5cXFwiKXtcXG4gICAgICAgICAgICAuI3skb3JpZW50fS0tI3skaX0ge1xcbiAgICAgICAgICAgICAgICAjeyRvcmllbnR9OiAkaSArICN7JG1lYXN1cmV9O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gQGVsc2UgaWYgKCAkb3JpZW50ID09IFxcXCJtYXJnaW4tdG9wXFxcIil7XFxuICAgICAgICAgICAgLiN7JG9yaWVudH0tLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgI3skb3JpZW50fTogJGkgKyAjeyRtZWFzdXJlfTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IEBlbHNlIGlmICggJG9yaWVudCA9PSBcXFwibWFyZ2luLXJpZ2h0XFxcIil7XFxuICAgICAgICAgICAgLiN7JG9yaWVudH0tLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgI3skb3JpZW50fTogJGkgKyAjeyRtZWFzdXJlfTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IEBlbHNlIGlmICggJG9yaWVudCA9PSBcXFwibWFyZ2luLWJvdHRvbVxcXCIpe1xcbiAgICAgICAgICAgIC4jeyRvcmllbnR9LS0jeyRpfSB7XFxuICAgICAgICAgICAgICAgICN7JG9yaWVudH06ICRpICsgI3skbWVhc3VyZX07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSBAZWxzZSBpZiAoICRvcmllbnQgPT0gXFxcIm1hcmdpbi1sZWZ0XFxcIil7XFxuICAgICAgICAgICAgLiN7JG9yaWVudH0tLSN7JGl9IHtcXG4gICAgICAgICAgICAgICAgI3skb3JpZW50fTogJGkgKyAjeyRtZWFzdXJlfTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuXFxuICAgIH1cXG59XFxuXFxuQGluY2x1ZGUgc3BhY2luZy1tb2RpZmllcnMoXFxcInZlcnRpY2FsXFxcIiwgNSwgXFxcInJlbVxcXCIpO1xcbkBpbmNsdWRlIHNwYWNpbmctbW9kaWZpZXJzKFxcXCJob3Jpem9udGFsXFxcIiwgNSwgXFxcInJlbVxcXCIpO1xcblxcblxcbi8vIFBhZGRpbmdcXG5AaW5jbHVkZSBzcGFjaW5nLW1vZGlmaWVycyhcXFwicGFkZGluZ1xcXCIsIDUsIFxcXCJyZW1cXFwiKTtcXG5AaW5jbHVkZSBzcGFjaW5nLW1vZGlmaWVycyhcXFwicGFkZGluZy10b3BcXFwiLCA1LCBcXFwicmVtXFxcIik7XFxuQGluY2x1ZGUgc3BhY2luZy1tb2RpZmllcnMoXFxcInBhZGRpbmctcmlnaHRcXFwiLCA1LCBcXFwicmVtXFxcIik7XFxuQGluY2x1ZGUgc3BhY2luZy1tb2RpZmllcnMoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgNSwgXFxcInJlbVxcXCIpO1xcbkBpbmNsdWRlIHNwYWNpbmctbW9kaWZpZXJzKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCA1LCBcXFwicmVtXFxcIik7XFxuXFxuLy8gTWFyZ2luXFxuQGluY2x1ZGUgc3BhY2luZy1tb2RpZmllcnMoXFxcIm1hcmdpblxcXCIsIDUsIFxcXCJyZW1cXFwiKTtcXG5AaW5jbHVkZSBzcGFjaW5nLW1vZGlmaWVycyhcXFwibWFyZ2luLXRvcFxcXCIsIDUsIFxcXCJyZW1cXFwiKTtcXG5AaW5jbHVkZSBzcGFjaW5nLW1vZGlmaWVycyhcXFwibWFyZ2luLXJpZ2h0XFxcIiwgNSwgXFxcInJlbVxcXCIpO1xcbkBpbmNsdWRlIHNwYWNpbmctbW9kaWZpZXJzKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNSwgXFxcInJlbVxcXCIpO1xcbkBpbmNsdWRlIHNwYWNpbmctbW9kaWZpZXJzKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDUsIFxcXCJyZW1cXFwiKTtcXG5cIixcIkBpbXBvcnQgXFxcIi4vX3ZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9fc3BhY2luZ1xcXCI7XFxuQGltcG9ydCBcXFwiLi9fZGlzcGxheVxcXCI7XFxuQGltcG9ydCBcXFwiLi9fdHlwb2dyYXBoeVxcXCI7XFxuXFxuYm9keSB7XFxuICAgIEBpbmNsdWRlIGZvbnQtc3R5bGUoKTtcXG59XFxuXFxuLy8gSW5wdXQgVGV4dGFyZWFcXG5pbnB1dCwgXFxudGV4dGFyZWEsIFxcbnNlbGVjdHtcXG4gICAgYm9yZGVyOiAkaW5wdXQtLWJvcmRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcXG4gICAgQGluY2x1ZGUgZm9udC1zdHlsZSgpO1xcbiAgICBAaW5jbHVkZSBpbnB1dC1wYWRkaW5nKDAuNSk7XFxuICAgICY6bm90KFt0eXBlPVxcXCJyYWRpb1xcXCJdKXtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcbmxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxubGFiZWxbZm9yXXtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi8vREVNTyBQVVJQT1NFUzogd2l0aCBjdXN0b20gU1RPUkQgaGlnaGxpZ2h0IGRpdmRlclxcbi5oYXMtaGlnaGxpZ2h0LWRpdmlkZXJ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIGgxe1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbn1cXG4uc3RvcmQtaGlnaGxpZ2h0LWRpdmlkZXIge1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2M2ZmXFxufVwiLFwiJHR5cGVzOiBcXFwiYmxvY2tcXFwiLCBcXFwiaW5saW5lLWJsb2NrXFxcIiwgXFxcImlubGluZVxcXCI7XFxuJGFsaWdubWVudDogXFxcInRvcFxcXCIsIFxcXCJtaWRkbGVcXFwiLCBcXFwiYm90dG9tXFxcIjtcXG5AbWl4aW4gZGlzcGxheS1tb2RpZmllcnMoKSB7XFxuICAgIEBlYWNoICR0eXBlIGluICR0eXBlcyB7XFxuICAgICAgICAuZGlzcGxheS0tI3skdHlwZX17XFxuICAgICAgICAgICAgZGlzcGxheTogI3skdHlwZX07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuQG1peGluIHZlcnRpY2FsLWFsaWduLW1vZGlmaWVycygpIHtcXG4gICAgQGVhY2ggJGFsaWduIGluICRhbGlnbm1lbnQge1xcbiAgICAgICAgLnZlcnRpY2FsLWFsaWduLS0jeyRhbGlnbn17XFxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246ICN7JGFsaWdufTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5AaW5jbHVkZSBkaXNwbGF5LW1vZGlmaWVycygpO1xcbkBpbmNsdWRlIHZlcnRpY2FsLWFsaWduLW1vZGlmaWVycygpO1wiLFwiQGltcG9ydCBcXFwiLi9fX3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5AbWl4aW4gZm9udC1zdHlsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAkYm9keS0tZm9udC1mYW1pbHk7XFxuICAgIGNvbG9yOiAkYm9keS0tY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogJGJvZHktLWZvbnQtc2l6ZTtcXG4gICAgZm9udC13ZWlnaHQ6ICRib2R5LS1mb250LXdlaWdodDtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbi50ZXh0LS10cnVuY2F0ZWR7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4udGV4dC0tYm9sZHtcXG4gICAgZm9udC1mYW1pbHk6ICRib2R5LS1mb250LWJvbGQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi50ZXh0LS1pdGFsaWN7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLnRleHQtLWNlbnRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubGFiZWwtLXdhcm5pbmd7XFxuICAgIGNvbG9yOiAjY2QxZTBhO1xcbn1cXG4kc2l6ZXM6IFxcXCJzbWFsbFxcXCIsIFxcXCJtZWRpdW1cXFwiLCBcXFwibGFyZ2VcXFwiO1xcbkBtaXhpbiB0ZXh0LXNpemUtbW9kaWZpZXJzKCkge1xcbiAgICBAZWFjaCAkc2l6ZSBpbiAkc2l6ZXMge1xcbiAgICAgICAgLnRleHQtLSN7JHNpemV9e1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogI3skc2l6ZX07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuQGluY2x1ZGUgdGV4dC1zaXplLW1vZGlmaWVycygpO1wiLFwiJGJvZHktLWZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiRib2R5LS1mb250LWxpZ2h0OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiRib2R5LS1mb250LWJvbGQ6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuJGJvZHktLWNvbG9yOiAjMGEwYTBhO1xcbiRib2R5LS1mb250LXNpemU6IDE0cHQ7XFxuJGJvZHktLWZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuJGJvZHktLWJhY2tncm91bmQ6ICNmM2YzZjM7XFxuXFxuJHJhZGl1czogMC4xNXJlbTtcXG5cXG4kYm9yZGVyLS13aWR0aDogMXB4O1xcbiRib3JkZXItLWNvbG9yOiAkYm9keS0tY29sb3I7XFxuJGlucHV0LS1ib3JkZXI6ICRib3JkZXItLXdpZHRoIHNvbGlkICRib3JkZXItLWNvbG9yO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG4vLyBJdCdzIGVtcHR5IGFzIHNvbWUgcnVudGltZSBtb2R1bGUgaGFuZGxlcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fVxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfY3NzVy1kYjMwMGRcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSB4ID0+IHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdXJsX3Nob3J0ZW5lclwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt1cmxfc2hvcnRlbmVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8ICh4ID0+IHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=