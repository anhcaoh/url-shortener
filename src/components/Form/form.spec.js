import React from "react";
import renderer from "react-test-renderer";
import Form from "./index";

describe("Form", () => {
  it("should render snapshot", () => {
    const component = renderer.create(<Form>Children within Form</Form>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});