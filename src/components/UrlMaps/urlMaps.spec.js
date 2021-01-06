import React from "react";
import renderer from "react-test-renderer";
import UrlMaps from "./index";
 
describe("UrlMaps", () => {
    it("should render snapshot", () => {
            const component = renderer.create(<UrlMaps />);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot(); 
    });
});