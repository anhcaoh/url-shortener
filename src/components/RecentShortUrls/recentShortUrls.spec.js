import React from "react";
import renderer from "react-test-renderer";
import RecentShortUrls from "./index";
 
describe("RecentShortUrls", () => {
    it("should render snapshot", () => {
            const component = renderer.create(<RecentShortUrls />);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot(); 
    });
});