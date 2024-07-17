import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TitleBlock from "../components/TitleBlock";

test("calls onSearch with the input value when search button is clicked", () => {
  const handleSearch = jest.fn();
  render(<TitleBlock onSearch={handleSearch} />);

  const input = screen.getByPlaceholderText(/search trips/i);
  const button = screen.getByText(/search/i);

  fireEvent.change(input, { target: { value: "beach" } });
  fireEvent.click(button);

  expect(handleSearch).toHaveBeenCalledWith("beach");
});

test("calls onSearch with the input value when 'Enter' key is pressed", () => {
  const handleSearch = jest.fn();
  render(<TitleBlock onSearch={handleSearch} />);

  const input = screen.getByPlaceholderText(/search trips/i);

  fireEvent.change(input, { target: { value: "mountain" } });
  fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

  expect(handleSearch).toHaveBeenCalledWith("mountain");
});
