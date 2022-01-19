// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TCRBox from "./TCRBox";
import { TCRBoxProps } from "./TCRBox.types";

describe("Test Component", () => {
  let props: TCRBoxProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TCRBox {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TCRBox");

    expect(component).toHaveTextContent("harvey was here");
  });
});
