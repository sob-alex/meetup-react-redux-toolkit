import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Comment.module.css';

const Comment = ({ name, body, email }) => {
  return (
    <li className={styles.comment}>
      <h3>{name}</h3>
      <h5>{email}</h5>
      <p>{body}</p>
    </li>
  );
};

export default Comment;
