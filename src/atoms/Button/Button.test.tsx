import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      variant: "primary",
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-button");

    expect(testComponent).toHaveClass("test-button-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.variant = "secondary";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-button");

    expect(testComponent).toHaveClass("test-button-secondary");
  });
});
