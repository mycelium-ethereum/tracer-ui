// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";

describe("Test Component", () => {
  let props: NavbarProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Navbar {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Navbar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
