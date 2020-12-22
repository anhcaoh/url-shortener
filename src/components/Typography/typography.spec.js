import React from "react";
import renderer from "react-test-renderer";
import { H1, H2, Paragraph, Block, Text, Label } from "./index";
 
describe("Typography", () => {
    it("should render snapshot", () => {
            const component = renderer.create(<>
                <H1>Heading 1</H1>
                <H2>Heading 2</H2>
                <Paragraph>Paragraph</Paragraph>
                <Block>Block Division</Block>
                <Text>Text Span</Text>
                <Label>Label</Label>
                </>);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot(); 
    });
});