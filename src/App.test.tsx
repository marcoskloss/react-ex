import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("App", () => {
  test("criar task", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Escreva sua task aqui...");
    await userEvent.type(input, "Comprar batata");

    const button = screen.getByText("+ Add");
    await userEvent.click(button);

    expect(screen.getByText("Comprar batata")).toBeDefined();
  });

  test("criar task sem texto", async () => {
    render(<App />);

    const button = screen.getByText("+ Add");
    await userEvent.click(button);

    expect(screen.getByText("Preencha o campo")).toBeDefined();
  });

  test("completar task", async () => {
    render(<App />);

    const saveButton = screen.getByText("+ Add");
    const input = screen.getByPlaceholderText("Escreva sua task aqui...");

    // adicionei batata
    await userEvent.type(input, "Comprar batata");
    await userEvent.click(saveButton);

    // adicionei banana
    await userEvent.type(input, "Comprar banana");
    await userEvent.click(saveButton);

    const toggleButton = screen.getByTestId("Comprar batata-toggle");
    await userEvent.click(toggleButton);

    expect(screen.getByTestId("Comprar batata-toggle").textContent).toBe(
      "Reabrir",
    );

    await userEvent.click(toggleButton);
    expect(screen.getByTestId("Comprar batata-toggle").textContent).toBe(
      "Completar",
    );
  });
});
