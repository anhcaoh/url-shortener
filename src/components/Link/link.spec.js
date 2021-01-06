import React from "react";
import renderer from "react-test-renderer";
import Link from "./index";
import { shallow } from "enzyme";

describe("Link", () => {
  it("should render snapshot", () => {
    const component = renderer.create(<Link>Link</Link>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should handle click event 2 times", () => {
    const mockFunc = jest.fn();
    const wrapper = shallow((<Link onClick={mockFunc}>Link</Link>));
    wrapper.find("a").simulate("click");
    wrapper.find("a").simulate("click");
    expect(mockFunc).toHaveBeenCalledTimes(2);
});
});