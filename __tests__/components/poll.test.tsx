import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Poll from "@/app/(product)/poll/_components/poll";

describe("Poll Component", () => {
  test("renders Poll component with question and options", () => {
    const question = "What's your favorite color?";
    const options = ["Red", "Green", "Blue"];
    render(<Poll question={question} options={options} />);

    expect(screen.getByText(question)).toBeInTheDocument();
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("allows polling and updates results", async () => {
    const question = "Favorite Color?";
    const options = ["Red", "Blue", "Green"];

    render(<Poll question={question} options={options} />);

    const optionButton = screen.getByText("Red");
    fireEvent.click(optionButton);

    const optionResult = await screen.findByText("Red:");
    const count = optionResult.nextSibling;
    expect(count).toHaveTextContent("1");
  });

  it("reset poll sets vote counts to zero", async () => {
    const question = "Favorite Color?";
    const options = ["Red", "Blue", "Green"];

    render(<Poll question={question} options={options} />);

    const optionButton = screen.getByText("Red");
    fireEvent.click(optionButton);

    const resetButton = screen.getByText("Reset Poll");
    fireEvent.click(resetButton);
  });
});
