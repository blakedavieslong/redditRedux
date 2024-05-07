import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  subReddit: "r/popular",
  isLoading: false,
  hasError: false
};


export const pullPopular = createAsyncThunk(
  'reddit/pullPopular',
  async () => {
    const response = await fetch(`https://www.reddit.com/r/popular.json?raw_json=1`);
    const json = await response.json();
    return json;
  }
);

export const searchReddit = createAsyncThunk(
  'reddit/searchReddit',
  async (term) => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${term}&raw_json=1`);
    const json = await response.json();
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
      })
      .addCase(searchReddit.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(searchReddit.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(searchReddit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.articles = action.payload.data.children;
        state.subReddit = `search for: ${action.meta.arg}`;
      })
  },
});

export const selectSubReddit = (state) => state.reddit.subReddit;
export const selectAllArticles = (state) => state.reddit.articles;
export default redditSlice.reducer;
