import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CurrentWeather from "../../src/components/CurrentWeather";
import React from "react";
import "@testing-library/jest-dom/vitest";
import { WeatherData } from "../../src/utils/api";