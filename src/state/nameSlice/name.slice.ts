import { createSlice } from "@reduxjs/toolkit";


interface UiKaraoke {
}

const initialState: UiKaraoke = {
  
};
export const nameSlice = createSlice({
  name: "uiPage",
  initialState,
  reducers: {
    onAction: (state /* action */) => {
    },
  },
});

export const {
  onAction
} = nameSlice.actions;
