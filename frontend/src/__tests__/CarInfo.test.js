import { render, waitForDomChange } from "@testing-library/react";
import CarInfo from "../pages/CarInfo";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("CarInfo", () => {
  it("renders the car information page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <CarInfo />
        </Router>
      </Provider>
    );

    waitForDomChange().then(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders the car information", () => {
    render(
      <Provider store={store}>
        <Router>
          <CarInfo />
        </Router>
      </Provider>
    );
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          make: "Aston Martin",
          model: "DB9",
          location: "Manchester",
          transmission: "Automatic",
          price: "£250,000",
          mileage: "3000",
          status: "Available",
          fuelType: "Petrol",
          description: "This is a car",
          colour: "Blue",
          doors: "4",
          seats: "4",
          litres: "4.0",
          bodyType: "Sports",
          phoneNumber: "07712345678",
          email: "mo@email.com",
        },
      ],
    });
  });
});
