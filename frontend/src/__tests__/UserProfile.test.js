import { render, screen, waitForDomChange } from "@testing-library/react";
import UserProfile from "../pages/UserProfile";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("UserProfile", () => {
  it("renders the user profile page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <UserProfile />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders the My Profile text", () => {
    render(
      <Provider store={store}>
        <Router>
          <UserProfile />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      expect(screen.getByText("My Profile")).toBeInTheDocument();
    });
  });

  it("renders the name of user and their email address", () => {
    render(
      <Provider store={store}>
        <Router>
          <UserProfile />
        </Router>
      </Provider>
    );
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ name: "Mo", email: "mo@email.com" }],
    });
  });

  it("renders the text if no cars added yet", () => {
    render(
      <Provider store={store}>
        <Router>
          <UserProfile />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const { getComputedStyle } = window;
      window.getComputedStyle = (elt) => getComputedStyle(elt);
      screen.getByRole("heading", {
        name: /\- no cars added yet\./i,
      });
    });
  });
});
