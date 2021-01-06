import React, { useState } from "react";
import { H3, Block, Text, List } from "Components/Typography";
import Link from "Components/Link";
import Button from "Components/Button";
import "./recentShortUrls.scss";
const RecentShortUrls = ( {urlMaps, setStateUrlMaps} ) => {
    const [ isHiddenMenu, toggleHiddenMenu ] = useState( true );
    return (<>
        {(urlMaps && urlMaps.length &&
        (<><Block id="recent-short-urls" className={ isHiddenMenu ? "hidden" : "" }>
                <H3><Text>Recent Short URLs:</Text></H3>
                <List id="recent-short-urls-list">
                {urlMaps.reverse().map( (url) => (
                <li><Link href={url.shortUrl} 
                title={url.originalUrl}>{url.shortUrl}</Link></li>
                ))}</List>
                <Button id="clear-all-recent" 
                onClick={(e) => setStateUrlMaps({"urlMaps":[]})}>
                <Text>Clear All</Text></Button>
                <Button id="close-all-recent" 
                onClick={(e) => toggleHiddenMenu(!isHiddenMenu)}>
                <Text>Close</Text></Button>
            </Block>
            { isHiddenMenu && (<Button id="open-all-recent" 
            onClick={(e) => toggleHiddenMenu(!isHiddenMenu)}>
            <Text>Recent Short URLs</Text></Button>)}
            </>)) || null
    }</>);
};
export default RecentShortUrls;