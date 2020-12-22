import React from "react";
import renderer from "react-test-renderer";
import Button from "./index";
import { shallow } from "enzyme";

describe("Button", () => {
  it("should render snapshot", () => {
    const component = renderer.create(<Button>Button</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should handle click event 2 times", () => {
    const mockFunc = jest.fn();
    const wrapper = shallow((<Button onClick={mockFunc}>Button</Button>));
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(mockFunc).toHaveBeenCalledTimes(2);
});

});