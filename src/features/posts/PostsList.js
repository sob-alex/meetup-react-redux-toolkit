import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './postsSlice';
import Post from './Post';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <ul>
      {posts?.map((post) => (
        <Post title={post.title} body={post.body} id={post.id} />
      ))}
    </ul>
  );
};

export default PostsList;
