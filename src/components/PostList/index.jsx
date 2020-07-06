import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;
  return (
    <div className="post-list">
      <h1>Post List</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;