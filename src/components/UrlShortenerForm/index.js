import React, { useState, useEffect } from "react";
import { Text, Paragraph } from "Components/Typography";
import Form from "Components/Form";
import Input from "Components/Input";
import Button from "Components/Button";
const UrlShortenerForm = ( { urlMaps, shortUrl, setStateShortUrl, setStateUrlMaps } ) => {
    const [ error, setError ] = useState({ hasError: false, message: null}); 
    const [ isShortening, setIsShortening ] = useState( false );
    const [ validWebAddress, setValidWebAddress ] = useState( false );
    const _serviceUrl = (process.env.SERVICE_HOST || "http://localhost") + ":" + 
    (process.env.SERVICE_PORT || 9000);
    const _pathname = window.location.pathname;

    useEffect(()=>{
        if(urlMaps && urlMaps.length) {//Get originalUrl from local storage urlMaps
            const _urlInMaps = urlMaps.filter((urlMap) => urlMap.shortUrl === _pathname)[0];
            (_urlInMaps && _urlInMaps.originalUrl) && window.location.replace(_urlInMaps.originalUrl);
        } else if( _pathname !== "/" ){
            fetch(_serviceUrl + "/short/" + _pathname.replace("/", ""), {
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(({status, originalUrl, shortUrl, hash}) => {
                if( status === 200 && originalUrl ){
                    window.location.replace(originalUrl);
                } else {
                    setError({ "hasError": true, 
                    "message": "Our service is feeling under the weather. We'll be back better soon." });
                }
            }).catch(err => {
                setError({ "hasError": true, 
                "message": "Our service is feeling under the weather. We'll be back better soon." });
            });
        }
    }, [urlMaps]);

    const validateWebAddress = ( e ) => {
        const isValidWebAddress = e.target.checkValidity();
        setValidWebAddress(isValidWebAddress);
    };

    const onChangeHandler = ( e ) => {
        validateWebAddress(e);
        const _value = e.target.value;
        if( _value ){
            setStateShortUrl(_value);
            setError( { "hasError": false, "message": null } );
        }
    };

    const makeShortUrl = ( url ) => {
        setIsShortening(true);
        return fetch(_serviceUrl + "/short/", {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "url" : url })
        })
        .then(res => res.json())
        .then(data => {
            const { shortUrl, originalUrl, hash, hasError, message } = data;
            if( hasError ){
                setError( { "hasError": hasError, "message": message } );
            } else {
                setError( { "hasError": false, "message": "" } );
            }
            setIsShortening(false);
            return { shortUrl, originalUrl, hash };
        }).catch((error) => {
            return { "hasError": true, 
            "message": "Our service is feeling under the weather. We'll be back better soon." };
        });
    };

    const handleShortUrlMaker = (e) => {
        e.preventDefault();
        makeShortUrl( shortUrl )
        .then(({shortUrl, originalUrl, hash, hasError, message }) => {
            if ( shortUrl && hash ) {
                setStateShortUrl( shortUrl );
                setValidWebAddress(false); //as input now renders shortUrl
                setStateUrlMaps({"shortUrl":{ shortUrl, originalUrl, hash }} );
                setError( { "hasError": false, "message": "" } );
                
            } else if (hasError){
                setError( { "hasError": hasError, "message": message } );
            }
        });
    };


    return (<>
    <Form name="urlShortenerForm" 
        onSubmit={ handleShortUrlMaker } 
        className="text-center"
        style={{"width": "23rem"}}>
        <Input type="url"
        name={"urlShortenerInput"}
        required={true}
        pattern={"https?://.*"}
        handleOnChange={ onChangeHandler }
        autoFocus={ true }
        defaultValue={ shortUrl }
        className={["vertical-space--2 text--truncated", 
        validWebAddress ? "" : "invalid"].join(" ").trim()}
        placeholder="e.g. https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8"/>
        
        <Button
        disabled={ 
            !validWebAddress ||
            !shortUrl || 
            (error && error.hasError) }
        onClick={ () => setStateShortUrl(null) }>
        <Text>Clear</Text></Button>

        <Button type="submit"
        disabled={
            !validWebAddress ||
            !shortUrl || 
            (error && error.hasError) }
        className="primary stord margin-left--2">
        <Text>{isShortening ? "Shortening..." : "Shorten it"}</Text></Button>

        {(error && error.hasError) && (<Paragraph>
            <Text className="label--warning">
                {error && (error.hasError && error.message)}
            </Text>
        </Paragraph>)}
    </Form>
    </>);
};
export default UrlShortenerForm;