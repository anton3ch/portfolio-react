import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingSection from "../ContactMeSection";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
  fetchMock.resetMocks();
});

test("renders the form input fields", () => {
  render(<LandingSection />);

  // Check if input fields are rendered
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Comment/i)).toBeInTheDocument();
});

test("displays success message on form submission success", async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ success: true }));

  const { getByLabelText, getByText, findByText } = render(<LandingSection />);

  fireEvent.change(getByLabelText(/Name/i), { target: { value: "Test User" } });
  fireEvent.change(getByLabelText(/Email/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(getByLabelText(/Comment/i), {
    target: { value: "This is a test comment." },
  });

  fireEvent.click(getByText(/Submit/i));

  expect(await findByText(/The form has been submitted/i)).toBeInTheDocument();
});

test("displays error message on form submission failure", async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({ message: "Form submission failed" }),
    { status: 400 }
  );

  const { getByLabelText, getByText, findByText } = render(<LandingSection />);

  fireEvent.change(getByLabelText(/Name/i), { target: { value: "Test User" } });
  fireEvent.change(getByLabelText(/Email/i), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(getByLabelText(/Comment/i), {
    target: { value: "This is a test comment." },
  });

  fireEvent.click(getByText(/Submit/i));

  expect(await findByText(/Yikes! An error occurred/i)).toBeInTheDocument();
});
