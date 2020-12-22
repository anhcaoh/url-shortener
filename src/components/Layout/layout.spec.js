import React from "react";
import renderer from "react-test-renderer";
import { Row, Columns, Column, Card, Flexbox } from "./index";
 
describe("Layout", () => {
    it("should render snapshot", () => {
            const component = renderer.create(<Row>
                <Columns>
                    <Column>
                        <Flexbox>
                            <Card>Content inside layout components</Card>
                        </Flexbox>
                    </Column>
                </Columns>
                </Row>);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot(); 
    });
});