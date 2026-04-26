import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Alo2 from "./page";

test("Page", () => {
  render(<Alo2 />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Alo 2 page" }),
  ).toBeDefined();
});
