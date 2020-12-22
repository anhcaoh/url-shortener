import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "Store";
import Connected from "Store/connect";
import { Columns, Column, Row, Flexbox } from "Components/Layout";
import { H1, Paragraph, Block, Text } from "Components/Typography";
import Form from "Components/Form";
import Button from "Components/Button";
import Input from "Components/Input";
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    useHistory
  } from "react-router-dom";
import "Scss/style.scss";
function App() {

    const _pathname = window.location.pathname;
    const [shortUrl, setShortUrl] = useState( _pathname === "/" ? ""  : _pathname );
    const [encodedUrl, setEncodedUrl] = useState("");
    const [rawUrl, setRawUrl] = useState(shortUrl || "");
    const [hasError, setHasError ] = useState({ hasError: false, message: ""});

    const UrlShortener = () => {
        let history = useHistory();
        return (<>
        <Provider store={store}>
        <Connected data={ {"shortUrl": shortUrl, "hash": encodedUrl } } 
            render={ ( { urlMaps, setStateShortUrl, setStateUrlMaps, reset } ) => {

            if(urlMaps && urlMaps.length) {
                //Get hash from local storage urlMaps
                const _urlInMaps = urlMaps.filter((urlMap) => urlMap.shortUrl === _pathname)[0];
                if( _urlInMaps ) console.log(_urlInMaps);
                const _uri = ((_urlInMaps && _urlInMaps.hash) || _pathname.replace("/", "")).replace("/", "");
                //Get original long URL from short URL/hash
                if(_uri){
                        fetch("http://localhost:9000/long/" + _uri, {
                        method: "GET",
                        headers:{
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => response.json())
                    .then(({status, originalUrl, hash}) => {
                        if( status === 200 && originalUrl ){
                            setRawUrl(originalUrl);
                        }
                    });
                }
            }
            const resetUrls = () => {
                setShortUrl(""); 
                setEncodedUrl("");
            };

            const makeShortUrl = ( _rawUrl ) => {
                return fetch("http://localhost:9000/short", {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "url" : _rawUrl })
                })
                .then(response => response.json())
                .then(data => {
                    const { shortUrl, hash, hasError, message } = data;
                    if( hasError ){
                        setHasError( { "hasError": hasError, "message": message } );
                    } else {
                        setHasError( { "hasError": false, "message": "" } );
                    }
                    return { shortUrl, hash };
                }).catch((error) => {
                    return { "hasError": true, 
                    "message": "Our service is feeling under the weather. We'll be back better soon." };
                });
            };

            const handleReset = () => {
                reset();
                setRawUrl("");
                resetUrls();
                // history.push("/");
            };

            const onChangeHandler = ( value ) => {
                if(value){
                    setHasError( { "hasError": false, "message": "" } );
                    setRawUrl(value);
                    // history.push("/");
                }
            };
        
            const handleShortUrlMaker = (e) => {
                makeShortUrl( rawUrl )
                .then(({shortUrl, hash, hasError, message }) => {
                    if ( shortUrl && hash ) {
                        setStateShortUrl( { shortUrl, hash } );
                        setStateUrlMaps( { shortUrl, hash } );
                        setShortUrl( shortUrl );
                        setEncodedUrl( hash );
                        setRawUrl( shortUrl  );
                        setHasError( { "hasError": false, "message": "" } );
                    } else if (hasError){
                        setHasError( { "hasError": hasError, "message": message } );
                    }
                    // history.push( url );
                });
                
             
            };

            return(
            <Row>
            <Columns>
            <Column className="col-12">
                <Flexbox className="text--center">
                    <Block className="has-highlight-divider">
                    <H1>URL Shortener</H1>
                    <Block className="stord-highlight-divider"></Block>
                    </Block>
                    <Form className="text-center" 
                        style={{"width": "23rem"}}>
                        <Input 
                        handleOnChange={ onChangeHandler }
                        autoFocus={true}
                        value={rawUrl}
                        className="vertical-space--2 text--truncated"
                        placeholder="e.g. https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8"/>
                        
                        { <Button
                        disabled={!rawUrl || (hasError && hasError.hasError)}
                        onClick={ handleReset }>
                        { "Clear" }</Button>}

                        <Button className="primary stord margin-left--2" 
                        disabled={!rawUrl || (hasError && hasError.hasError)}
                        onClick={ handleShortUrlMaker }>
                        { "Shorten it" }
                        </Button>
                        {(hasError && hasError.message) && (<Paragraph>
                            <Text className="label--warning">
                                {hasError && hasError.message}
                            </Text>
                        </Paragraph>)}
                    </Form>
                </Flexbox>
            </Column>
            </Columns>
        </Row>); }} />
        </Provider>
        </>);
    };

    return (<>
    <Router>
        <Switch>
            <Route component={UrlShortener} />
        </Switch>
    </Router>
    </>);
}
render(<App />, document.getElementById("root"));