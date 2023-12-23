// Import necessary testing utilities and components
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Error from "../components/Error";

// Mock the react-router-dom module for testing purposes
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteError: () => ({
    statusText: "Mocked Status",
    error: { message: "Mocked Error Message" },
  }),
  useNavigate: jest.fn(),
}));

// Describe block for testing the Error component
describe("Check Error Functionality", () => {
  // Test case: Ensure that the Error component renders without errors
  it("should render error page", () => {
    render(
      <MemoryRouter initialEntries={["/error"]}>
        <Error />
      </MemoryRouter>
    );
    const errorPage = screen.getByTestId("test-error-page");
    expect(errorPage).toBeInTheDocument();
  });

  // Test case: Ensure that the Error component displays the mocked status and error message
  it("should show error status and message on screen", () => {
    render(
      <MemoryRouter initialEntries={["/error"]}>
        <Error />
      </MemoryRouter>
    );
    const errorPage = screen.getByTestId("test-error-page");
    expect(errorPage).toHaveTextContent("Mocked Status");
    expect(errorPage).toHaveTextContent("Mocked Error Message");
  });

  // Test case: Ensure that clicking the "Go Back" button navigates to the home page
  it("should navigate to home page on click", () => {
    // Mock the useNavigate hook
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    // Render the Error component within a MemoryRouter
    render(
      <MemoryRouter initialEntries={["/error"]}>
        <Error />
      </MemoryRouter>
    );

    // Simulate a click on the "Go Back" button
    const goBackBtn = screen.getByTestId("go-back-btn");
    fireEvent.click(goBackBtn);

    // Verify that the navigate function was called with the correct argument
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
