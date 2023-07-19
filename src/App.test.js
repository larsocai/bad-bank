import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";

test("create account form submission", async () => {
  // Mock localStorage
  Storage.prototype.getItem = jest.fn(() => JSON.stringify([]));
  Storage.prototype.setItem = jest.fn();

  render(
    <BrowserRouter>
      <CreateAccount />
    </BrowserRouter>
  );

  userEvent.type(screen.getByPlaceholderText("Enter username"), "testUser");
  userEvent.type(
    screen.getByPlaceholderText("Enter email"),
    "test@example.com"
  );
  userEvent.type(screen.getByPlaceholderText("Enter password"), "testPassword");
  userEvent.click(screen.getByRole("button", { name: /Create Account/i }));

  await waitFor(() =>
    expect(
      screen.getByRole("button", { name: /Add another account/i })
    ).toBeInTheDocument()
  );

  expect(Storage.prototype.setItem).toHaveBeenCalledWith(
    "users",
    JSON.stringify([
      {
        username: "testUser",
        email: "test@example.com",
        password: "testPassword",
        balance: 0,
      },
    ])
  );
});
