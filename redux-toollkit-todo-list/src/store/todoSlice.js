import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    lists: [
      {
        name: 'ブログを確認',
        complete: false,
      },
      {
        name: 'メールの返信',
        complete: false,
      },
    ],
  },
  reducers: {
    doneList: (state, action) => {
      const { name } = action.payload;
      const item = state.lists.find((item) => item.name === name);
      if (item) {
        item.complete = true;
      }
    },
  },
});

export const { doneList } = todoSlice.actions;

export default todoSlice.reducer;
