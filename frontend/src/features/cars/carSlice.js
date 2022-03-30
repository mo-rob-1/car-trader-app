import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import carService from "./carService";

const initialState = {
  cars: [],
  car: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Add a car
export const addCar = createAsyncThunk("cars/create", async (carData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await carService.addCar(carData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// Fetch all cars from database
export const getAllCars = createAsyncThunk("cars/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await carService.getAllCars(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Fetch user cars from database
export const getUserCars = createAsyncThunk("cars/getUserCars", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await carService.getUserCars(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// Fetch a car from database
export const getUserCar = createAsyncThunk("cars/getUserCar", async (carId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await carService.getUserCar(carId, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// Update a car
export const updateCar = createAsyncThunk("cars/update", async (carId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await carService.updateCar(carId, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// Delete a car
export const deleteCar = createAsyncThunk("cars/delete", async (carId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await carService.deleteCar(carId, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCar.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addCar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cars = action.payload;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = carSlice.actions;
export default carSlice.reducer;
