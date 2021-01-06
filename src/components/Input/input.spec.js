import React from "react";
import renderer from "react-test-renderer";
import Input from "./index";
import { mount } from "enzyme";

describe("Input", () => {
    it("should render snapshot", () => {
        const component = renderer.create(<Input />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot(); 
    });
    it("should update state when onChange input", () => {
        let wrapper = mount(<Input />);
        console.log(wrapper.find("input").props().value);
        const _newValue = "Input value has changed.";
        const eventObj = { target: {value: _newValue }};
        wrapper.find("input").simulate("change",  eventObj );
        wrapper.update();
        expect( wrapper.find("input").props().value ).toEqual( _newValue );
    });
});