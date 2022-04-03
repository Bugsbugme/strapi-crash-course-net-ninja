import { render, screen } from "@testing-library/react";
import { MockReview } from "../../graphql/__test__/mockReview";

describe("Review", () => {
  test("Render ReviewDetails and confirm there is only one review", async () => {
    const { debug } = render(<MockReview />);
    const reviewElement = await screen.findAllByTestId(/review-/i);
    expect(reviewElement.length).toBe(1);
    // debug();
  });

  test("Render ReviewDetails and find the heading", async () => {
    const { debug } = render(<MockReview />);
    const reviewTitle = await screen.findByText(/Rollercoaster Tycoon 2/i);
    expect(reviewTitle).toBeInTheDocument();
    // debug();
  });

  test("Render ReviewDetails and confirm rating is a string", async () => {
    const { debug } = render(<MockReview />);
    const reviewElement = await screen.findByTitle(/Rating/i);
    expect(reviewElement.innerHTML).not.toBe(/[0-9]/);
    // debug();
  });

  test("Render ReviewDetails and get the rating", async () => {
    const { debug } = render(<MockReview />);
    const reviewElement = await screen.findByTitle(/Rating/i);
    expect(reviewElement.innerHTML).toBe("9");
    // debug();
  });
});
