import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    getPostsSuccess(state, { payload }) {
      state.posts = payload;
      state.loading = false;
    },
    // мы также можем сконфигурирать пейлоад вручную
    // getPostsSuccess: {
    //   reducer(state, { payload }) {
    //     const { posts } = payload;
    //     state.posts = posts;
    //     state.loading = false;
    //   },
    //   prepare(posts) {
    //     return { payload: { posts } };
    //   },
    // },
    getPostsFailed(state, { error }) {
      state.error = error;
      state.loading = false;
    },
  },
});

export const getPosts = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch(getPostsSuccess(posts));
  } catch (err) {
    dispatch(getPostsFailed(err.toString()));
  }
};

export const {
  startLoading,
  getPostsSuccess,
  getPostsFailed,
} = postsSlice.actions;

export default postsSlice.reducer;
