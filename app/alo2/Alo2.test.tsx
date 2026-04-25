import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "./page";

test("Page", () => {
  render(<About />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Alo 2 page" }),
  ).toBeDefined();
});
