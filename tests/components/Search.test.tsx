import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import Search from "../../src/components/Search";
import "@testing-library/jest-dom/vitest";
import useCities from "../../src/utils/useCities";

// Mock the useCities hook
vi.mock("../../src/utils/useCities");

describe("Search Component", () => {
  const mockGetLatLang = vi.fn();

  beforeEach(() => {
    // vi.clearAllMocks();
    (useCities as any).mockReturnValue({
      cities: ["City1, RC1, CC1", "City2, RC2, CC2"],
      response: [
        {
          city: "City1",
          regionCode: "RC1",
          countryCode: "CC1",
          latitude: 1,
          longitude: 1,
        },
        {
          city: "City2",
          regionCode: "RC2",
          countryCode: "CC2",
          latitude: 2,
          longitude: 2,
        },
      ],
      error: null,
      loadCities: vi.fn(),
    });
  });

  it("renders the search input without error", () => {
    render(<Search getLatLang={mockGetLatLang} />);
    const searchLabel = screen.getByLabelText(/Search a City/i);
    expect(searchLabel).toBeInTheDocument();
  });

  it("calls loadCities on Enter key press", async () => {
    const mockLoadCities = vi.fn();

    (useCities as any).mockReturnValue({
      cities: ["City1, RC1, CC1", "City2, RC2, CC2"],
      response: [
        {
          city: "City1",
          regionCode: "RC1",
          countryCode: "CC1",
          latitude: 1,
          longitude: 1,
        },
        {
          city: "City2",
          regionCode: "RC2",
          countryCode: "CC2",
          latitude: 2,
          longitude: 2,
        },
      ],
      error: null,
      loadCities: mockLoadCities,
    });

    render(<Search getLatLang={mockGetLatLang} />);
    const input = screen.getByLabelText("Search a City");

    await waitFor(() => {
      fireEvent.change(input, { target: { value: "City1" } });
    });
    expect(input).toHaveValue("City1");

    await waitFor(() => {
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    });

    expect(mockLoadCities).toHaveBeenCalledWith("City1");
  });

  it("displays error page when there is an error", () => {
    (useCities as any).mockReturnValue({
      cities: [],
      response: null,
      error: "Error loading cities",
      loadCities: vi.fn(),
    });

    render(<Search getLatLang={mockGetLatLang} />);
    expect(screen.getByText("Error loading cities")).toBeInTheDocument();
  });

  it("calls getLatLang with correct parameters when a city is selected", async () => {
    const mockResponse = [
      {
        city: "New York",
        countryCode: "US",
        regionCode: "NY",
        latitude: 40.7128,
        longitude: -74.006,
      },
    ];

    (useCities as any).mockReturnValue({
      cities: ["New York, NY, US"],
      response: mockResponse,
      error: null,
      loadCities: vi.fn(),
    });

    render(<Search getLatLang={mockGetLatLang} />);
    const input = screen.getByLabelText("Search a City");

    fireEvent.change(input, { target: { value: "New York" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      fireEvent.click(screen.getByText("New York, NY, US"));
    });

    expect(mockGetLatLang).toHaveBeenCalledWith("40.7128#-74.006#New York, NY");
  });
});
