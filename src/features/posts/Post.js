import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.module.css';

const Post = ({ title, body, id }) => {
  return (
    <li className={styles.post}>
      <h2>
        <Link to={`post/${id}`}>{title}</Link>
      </h2>
      <p>{body}</p>
    </li>
  );
};

export default Post;
