import { render, screen, waitForDomChange } from "@testing-library/react";
import CarListing from "../pages/CarListing";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("CarListing", () => {
  it("renders the car listing page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders the card info text when a car is added", () => {
    render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          make: "Ford",
          model: "Fiesta",
          location: "London",
          transmission: "Manual",
          price: "£12000",
          mileage: "3200",
          status: "Available",
          fuelType: "Petrol",
        },
      ],
    });
  });

  it("renders the text if no cars are available", () => {
    render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const { getComputedStyle } = window;
      window.getComputedStyle = (elt) => getComputedStyle(elt);
      screen.getByRole("heading", {
        name: /no cars available/i,
      });
    });
  });

  it("renders the region select filter", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const regionFilter = getByTestId("region-select");
      expect(regionFilter).toBeTruthy();
    });
  });

  it("renders the transmission select filter", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const transmissionFilter = getByTestId("gearbox-select");
      expect(transmissionFilter).toBeTruthy();
    });
  });

  it("renders the fuel type select filter", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const fuelTypeFilter = getByTestId("fuel-type-select");
      expect(fuelTypeFilter).toBeTruthy();
    });
  });

  it("renders the colour select filter", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const colourFilter = getByTestId("colour-select");
      expect(colourFilter).toBeTruthy();
    });
  });

  it("renders the number of doors select filter", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const numberOfDoorsFilter = getByTestId("doors-select");
      expect(numberOfDoorsFilter).toBeTruthy();
    });
  });

  it("renders the number of seats select filter", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const numberOfSeatsFilter = getByTestId("seats-select");
      expect(numberOfSeatsFilter).toBeTruthy();
    });
  });

  it("renders the engine size select filter", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const engineSizeFilter = getByTestId("engine-size-select");
      expect(engineSizeFilter).toBeTruthy();
    });
  });

  it("renders the status select filter", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const statusFilter = getByTestId("status-select");
      expect(statusFilter).toBeTruthy();
    });
  });

  it("renders the body type select filter", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const bodyTypeFilter = getByTestId("body-type-select");
      expect(bodyTypeFilter).toBeTruthy();
    });
  });

  it("renders the clear filter button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const clearFilterButton = getByTestId("clear-filter-btn");
      expect(clearFilterButton).toBeTruthy();
    });
  });

  it("renders the load more button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const loadMoreButton = getByTestId("load-more-btn");
      expect(loadMoreButton).toBeTruthy();
    });
  });

  it("renders the search input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CarListing />
        </Router>
      </Provider>
    );
    waitForDomChange().then(() => {
      const searchInput = getByTestId("search-input");
      expect(searchInput).toBeTruthy();
    });
  });
});
