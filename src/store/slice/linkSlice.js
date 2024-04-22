import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const token = "dy1VilodNZRiGysamhIwSiXdAuovhQjx9yh3JBxMTE0S9EmK0XFoCPedcB39";

export const createShortLink = createAsyncThunk(
  "links/createShortLink",
  async (url) => {
    try {
      const response = await fetch(`https://api.tinyurl.com/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          url,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
);

const initialState = {
  items: [],
  status: "idle",
};

const linkSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    deleteLink: (state, action) => {
      console.log(state);
      state.items.filter((item) => item.link !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createShortLink.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createShortLink.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(createShortLink.fulfilled, (state, action) => {
        const res = action.payload;
        state.items.push({
          shortLink: res.data?.tiny_url,
          link: res.data?.url,
        });
        state.status = "idle";
      });
  },
});
export const { deleteLink } = linkSlice.actions;
export default linkSlice.reducer;
