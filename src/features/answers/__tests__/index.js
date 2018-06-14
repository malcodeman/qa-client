import React from "react";
import renderer from "react-test-renderer";

import Answer from "../components/Answer";

test("Answer matches snapshot", () => {
  const component = renderer.create(
    <Answer
      body={"answer body"}
      createdAt={"2018-06-14T07:06:04.000Z"}
      author={"creator"}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
