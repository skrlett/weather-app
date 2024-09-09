import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../../src/components/ErrorPage.tsx";
import React from "react";
import "@testing-library/jest-dom/vitest";

describe("group", () => {
  it("should render page with the correct on it", () => {
    render(<ErrorPage error="Invalid API Request" />);
    screen.debug();

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/Invalid API Request/i);
  });
});

