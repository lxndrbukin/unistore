import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, SystemProps } from './types';

const initialState: SystemProps = {
  ui: {
    header: {
      showMenuDropdown: false,
    },
  },
  currentPath: '/',
};

const systemSlice = createSlice({
  name: Slices.System,
  initialState,
  reducers: {
    showDropdown(state: SystemProps, action: PayloadAction<boolean>): void {
      state.ui.header.showMenuDropdown = action.payload;
    },
    setCurrentPath(state: SystemProps, action: PayloadAction<string>): void {
      state.currentPath = action.payload;
    },
  },
});

export default systemSlice.reducer;
export const { showDropdown, setCurrentPath } = systemSlice.actions;
