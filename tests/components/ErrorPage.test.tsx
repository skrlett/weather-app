import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../../src/components/ErrorPage.tsx";
import React from "react";

describe("group", () => {
  it("should render page with the correct on it", () => {
    render(<ErrorPage error="Invalid API Request" />);
    screen.debug();
  });
});
