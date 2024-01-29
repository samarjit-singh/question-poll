import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PollPage from "@/app/(product)/poll/page";

describe("Poll Page", () => {
  test("renders PollPage component", () => {
    render(<PollPage />);

    expect(screen.queryByText("Poll 1")).toBeInTheDocument();
    expect(screen.queryByText("Poll 2")).toBeInTheDocument();
    expect(screen.queryByAltText("Picture of university")).toBeInTheDocument();
  });

  test("displays Page1 component when Poll 1 button is clicked", () => {
    render(<PollPage />);
    fireEvent.click(screen.getByText("Poll 1"));

    expect(screen.getByTestId("page1")).toBeInTheDocument();
  });

  test("displays Page2 component when Poll 2 button is clicked", () => {
    render(<PollPage />);
    fireEvent.click(screen.getByText("Poll 2"));

    expect(screen.getByTestId("page2")).toBeInTheDocument();
  });
});
