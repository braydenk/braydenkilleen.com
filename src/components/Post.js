import React from 'react';

function Post({ html }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default Post;
