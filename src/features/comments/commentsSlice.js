import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    resetCommentsState(state) {
      return initialState;
    },
    getCommentsSuccess(state, { payload }) {
      state.comments = payload;
      state.loading = false;
    },
    getCommentsFailed(state, { error }) {
      state.error = error;
      state.loading = false;
    },
  },
});

export const getComments = (postId) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const comments = await response.json();
    dispatch(getCommentsSuccess(comments));
  } catch (err) {
    dispatch(getCommentsFailed(err.toString()));
  }
};

export const {
  startLoading,
  resetCommentsState,
  getCommentsSuccess,
  getCommentsFailed,
} = commentsSlice.actions;

export default commentsSlice.reducer;
