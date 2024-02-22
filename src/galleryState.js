import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async() => {
    const response = await fetch("https://picsum.photos/v2/list?page=3&limit=9");
    const formattedResponse = await response.json();
    return formattedResponse;
 } 
);

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
  reducers: {},
  //extraReducers used for Thunk
  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.isLoading = false;
      })
      .addCase(getPhotos.rejected, (state) => {
        state.isLoading = false;
      });
  }
});


export default gallerySlice.reducer;