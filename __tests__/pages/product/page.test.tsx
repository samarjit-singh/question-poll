import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductPage from "@/app/(product)/page";

describe("Dashboard page", () => {
  it("Should have a hero component", () => {
    render(<ProductPage />);

    const heroComponent = screen.getByTestId("hero-component");
    expect(heroComponent).toBeInTheDocument();
  });
});
