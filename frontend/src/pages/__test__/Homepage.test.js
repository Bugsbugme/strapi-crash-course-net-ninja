import { render, screen } from "@testing-library/react";
import { MockReviews } from "../../graphql/__test__/mockReviews";

describe("Reviews", () => {
  test("Render Homepage and find the matching heading", async () => {
    const { debug } = render(<MockReviews />);
    const headingElement = await screen.findByText(/Fallout: New Vegas/i);
    expect(headingElement).toBeInTheDocument();
    // debug();
  });

  test("Render Homepage and count the reviews", async () => {
    const { debug } = render(<MockReviews />);
    const reviewElements = await screen.findAllByTestId(/review/i);
    expect(reviewElements.length).toBe(5);
    // debug();
  });
});
