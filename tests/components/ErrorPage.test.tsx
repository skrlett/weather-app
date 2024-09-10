import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../../src/components/ErrorPage.tsx";
import React from "react";
import "@testing-library/jest-dom/vitest";

describe("ErrorPage Component", () => {
  it("should render the error icon", () => {
    render(<ErrorPage error="Invalid API Request" />);
    const errorIcon = screen.getByTestId("ErrorIcon");
    expect(errorIcon).toBeInTheDocument();
  });

  it("should render the error message", () => {
    render(<ErrorPage error="Invalid API Request" />);
    const errorMessage = screen.getByText(/Invalid API Request/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render replay button icon", () => {
    render(<ErrorPage error="Invalid API Request" />);
    const replayButton = screen.getByTestId("ReplayOutlinedIcon");
    expect(replayButton).toBeInTheDocument();
  });

  it("should have a link to the home page in the replay button", () => {
    render(<ErrorPage error="Invalid API Request" />);
    const replayButton = screen.getByRole("link");
    expect(replayButton.closest("a")).toHaveAttribute("href", "/");
  });

  it("click on replay button should go take to home page", () => {
    render(<ErrorPage error="Invalid API Request" />);
    const replayButton = screen.getByRole("link");

    replayButton.click();
    expect(window.location.pathname).toBe("/");
  });
});
