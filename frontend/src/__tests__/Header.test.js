import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header", () => {
  it("renders the header", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders car trader text logo", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    expect(screen.getAllByText("Car Trader")).toBeTruthy();
  });
});
