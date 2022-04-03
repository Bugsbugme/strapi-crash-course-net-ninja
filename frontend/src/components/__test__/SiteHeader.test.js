import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import SiteHeader from "../SiteHeader";

describe("Page Details", () => {
  test("Render Homepage and get the page title", async () => {
    const { debug } = render(
      <BrowserRouter>
        <SiteHeader />
      </BrowserRouter>
    );
    const pageTitle = screen.getByText(/Ninja Reviews/i);
    expect(pageTitle).toBeInTheDocument();
    // debug();
  });
});
