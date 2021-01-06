import React from "react";
import renderer from "react-test-renderer";
import UrlShortenerForm from "./index";
 
describe("UrlShortenerForm", () => {
    it("should render snapshot", () => {
            const component = renderer.create(<UrlShortenerForm />);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot(); 
    });
});