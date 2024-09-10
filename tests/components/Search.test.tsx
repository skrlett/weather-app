import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from "vitest";
import Search from "../../src/components/Search";
import useCities from "../../src/utils/useCities";