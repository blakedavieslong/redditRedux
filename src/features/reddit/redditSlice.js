import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  isLoading: false,
  hasError: false
};


export const pullPopular = createAsyncThunk(
  'reddit/pullPopular',
  async () => {
    const response = await fetch(`https://www.reddit.com/r/popular.json?raw_json=1`);
    const json = await response.json()
    return json;
  }
);

export const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(pullPopular.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(pullPopular.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(pullPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.articles = action.payload.data.children;
      });
  },
});

//export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectAllArticles = (state) => state.reddit.articles;
export default redditSlice.reducer;
