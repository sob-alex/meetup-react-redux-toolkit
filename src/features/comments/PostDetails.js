import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments, resetCommentsState } from './commentsSlice';
import Post from '../posts/Post';
import Comment from './Comment';

const PostDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id == id)
  );
  const comments = useSelector((state) => state.comments.comments);
  useEffect(() => {
    dispatch(getComments(id));
    return () => {
      dispatch(resetCommentsState());
    };
  }, []);

  return (
    <div>
      {post && <Post title={post.title} body={post.body} id={post.id} />}
      <h2>Comments: </h2>
      <ul>
        {comments?.map((comment) => (
          <Comment
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
