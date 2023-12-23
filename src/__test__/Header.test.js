import { MemoryRouter } from "react-router-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";

// Test: Rendering header component with logo
it("should render header component with logo", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  );
  const header = screen.getByTestId("test-header-logo");
  expect(header).toBeInTheDocument();
});

// Test Suite: Check Complete Functionality of navigation section
describe("Check Complete Functionality of navigation section", () => {
  // Test: Rendering header component with navigation
  it("should render header component with navigation", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );
    const header = screen.getByTestId("test-header");
    expect(header).toBeInTheDocument();
  });

  // Test: Showing heading with "Create Flashcard" on home page
  it("should show heading with Create Flashcard on home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );
    const header = screen.getByTestId("test-header");
    expect(header).toHaveTextContent("Create Flashcard");
  });

  // Test: Changing heading to "Show Flashcard" on show page
  it("should change heading with Show Flashcard on show page", () => {
    render(
      <MemoryRouter initialEntries={["/show"]}>
        <Header />
      </MemoryRouter>
    );
    const header = screen.getByTestId("test-header");
    expect(header).toHaveTextContent("Show Flashcard");
  });

  // Test: Showing "Show Flashcard" on show page after clicking on "Show Flashcard" navigation link
  it("should show Show Flashcard on show page after click on navigation Show Flashcard", () => {
    render(
      <MemoryRouter initialEntries={["/show"]}>
        <Header />
      </MemoryRouter>
    );
    const showFlashcardLink = screen.getByTestId("test-show-flashcard-link");
    const createFlashcardLink = screen.getByTestId(
      "test-create-flashcard-link"
    );
    fireEvent.click(showFlashcardLink);

    const header = screen.getByTestId("test-header");
    expect(header).toHaveTextContent("Show Flashcard");
    fireEvent.click(createFlashcardLink);
    expect(header).toHaveTextContent("Create Flashcard");
  });
});
