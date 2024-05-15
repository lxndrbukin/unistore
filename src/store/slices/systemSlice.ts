import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, SystemProps } from './types';

const initialState: SystemProps = {
  ui: {
    header: {
      showMenuDropdown: false,
    },
  },
};

const systemSlice = createSlice({
  name: Slices.System,
  initialState,
  reducers: {
    showDropdown(state: SystemProps, action: PayloadAction<boolean>): void {
      state.ui.header.showMenuDropdown = action.payload;
    },
  },
});

export default systemSlice.reducer;
export const { showDropdown } = systemSlice.actions;
