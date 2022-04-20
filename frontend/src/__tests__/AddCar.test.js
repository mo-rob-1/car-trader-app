import { render, screen, within } from "@testing-library/react";
import AddCar from "../pages/AddCar";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("AddCar", () => {
  it("renders the add car page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the seller's contact number input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const contactNumberLabel = getByTestId("contact-number-label");
    expect(contactNumberLabel).toBeTruthy();

    const contactNumberInput = getByTestId("contact-number-input");
    expect(contactNumberInput).toBeTruthy();
  });

  it("renders the make input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const makeLabel = getByTestId("make-label");
    expect(makeLabel).toBeTruthy();

    const makeInput = getByTestId("make-input");
    expect(makeInput).toBeTruthy();
  });

  it("renders the model input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const modelLabel = getByTestId("model-label");
    expect(modelLabel).toBeTruthy();

    const modelInput = getByTestId("model-input");
    expect(modelInput).toBeTruthy();
  });

  it("renders the image input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const imageLabel = getByTestId("image-label");
    expect(imageLabel).toBeTruthy();

    const imageInput = getByTestId("image-input");
    expect(imageInput).toBeTruthy();
  });

  it("renders the description input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const descriptionLabel = getByTestId("desc-label");
    expect(descriptionLabel).toBeTruthy();

    const descriptionInput = getByTestId("desc-textarea");
    expect(descriptionInput).toBeTruthy();
  });

  it("renders the location input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const locationLabel = getByTestId("location-label");
    expect(locationLabel).toBeTruthy();

    const locationInput = getByTestId("location-input");
    expect(locationInput).toBeTruthy();
  });

  it("renders the region select and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const regionLabel = getByTestId("region-label");
    expect(regionLabel).toBeTruthy();

    const regionSelect = getByTestId("region-select");
    expect(regionSelect).toBeTruthy();
  });

  it("renders the mileage input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const mileageLabel = getByTestId("mileage-label");
    expect(mileageLabel).toBeTruthy();

    const mileageInput = getByTestId("mileage-input");
    expect(mileageInput).toBeTruthy();
  });

  it("renders the fuel type select and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const fuelTypeLabel = getByTestId("fuel-type-label");
    expect(fuelTypeLabel).toBeTruthy();

    const fuelTypeSelect = getByTestId("fuel-type-select");
    expect(fuelTypeSelect).toBeTruthy();
  });

  it("renders the engine size select and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const engineSizeLabel = getByTestId("engine-size-label");
    expect(engineSizeLabel).toBeTruthy();

    const engineSizeSelect = getByTestId("engine-size-select");
    expect(engineSizeSelect).toBeTruthy();
  });

  it("renders the body type select and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const bodyTypeLabel = getByTestId("body-type-label");
    expect(bodyTypeLabel).toBeTruthy();

    const bodyTypeSelect = getByTestId("body-type-select");
    expect(bodyTypeSelect).toBeTruthy();
  });

  it("renders the transmission select and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const transmissionLabel = getByTestId("transmission-label");
    expect(transmissionLabel).toBeTruthy();

    const transmissionSelect = getByTestId("transmission-select");
    expect(transmissionSelect).toBeTruthy();
  });

  it("renders the color select and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const colorLabel = getByTestId("colour-label");
    expect(colorLabel).toBeTruthy();

    const colorSelect = getByTestId("colour-select");
    expect(colorSelect).toBeTruthy();
  });

  it("renders the number of doors select and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const numberOfDoorsLabel = getByTestId("number-of-doors-label");
    expect(numberOfDoorsLabel).toBeTruthy();

    const numberOfDoorsSelect = getByTestId("number-of-doors-select");
    expect(numberOfDoorsSelect).toBeTruthy();
  });

  it("renders the number of seats select and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const numberOfSeatsLabel = getByTestId("number-of-seats-label");
    expect(numberOfSeatsLabel).toBeTruthy();

    const numberOfSeatsSelect = getByTestId("number-of-seats-select");
    expect(numberOfSeatsSelect).toBeTruthy();
  });

  it("renders the price input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const priceLabel = getByTestId("price-label");
    expect(priceLabel).toBeTruthy();

    const priceInput = getByTestId("price-input");
    expect(priceInput).toBeTruthy();
  });

  it("renders the submit button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const submitButton = getByTestId("submit-button");
    expect(submitButton).toBeTruthy();
  });

  it("renders the sellers name input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const sellersNameLabel = getByTestId("sellers-name-label");
    expect(sellersNameLabel).toBeTruthy();

    const sellersNameInput = getByTestId("sellers-name-input");
    expect(sellersNameInput).toBeTruthy();
  });

  it("renders the sellers email input and label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    const sellersEmailLabel = getByTestId("sellers-email-label");
    expect(sellersEmailLabel).toBeTruthy();

    const sellersEmailInput = getByTestId("sellers-email-input");
    expect(sellersEmailInput).toBeTruthy();
  });

  it("renders the Add Car text heading", () => {
    render(
      <Provider store={store}>
        <Router>
          <AddCar />
        </Router>
      </Provider>
    );
    screen.getByRole("heading", {
      name: /add a car/i,
    });
  });
});
