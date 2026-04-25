import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Alo3 from "./page";

test("Page", () => {
  render(<Alo3 />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Alo 3 page" }),
  ).toBeDefined();
});
