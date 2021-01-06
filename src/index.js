import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "Store";
import Connected from "Store/connect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Columns, Column, Row, Flexbox } from "Components/Layout";
import { H1, Block, Text } from "Components/Typography";
import RecentShortUrls from "Components/RecentShortUrls";
import UrlShortenerForm from "Components/UrlShortenerForm";
import "Scss/style.scss";

function App() {   
    const UrlShortener = () => {
        return (<>
        <Provider store={store}>
        <Connected render={ ( { urlMaps, shortUrl, setStateShortUrl, setStateUrlMaps } ) => {
            return(<Row>
            <Columns>
            <Column className="col-12">
                <Flexbox className="text--center">
                    <Block className="has-highlight-divider">
                    <H1><Text>URL Shortener</Text></H1>
                    <Block className="stord-highlight-divider"></Block>
                    </Block>
                    <UrlShortenerForm 
                    setStateShortUrl={ setStateShortUrl }
                    setStateUrlMaps={ setStateUrlMaps }
                    shortUrl={ shortUrl } 
                    urlMaps={ urlMaps } />
                </Flexbox>
                <RecentShortUrls 
                urlMaps={urlMaps} 
                setStateUrlMaps={setStateUrlMaps} />
            </Column>
            </Columns>
            </Row>
            );} } />
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