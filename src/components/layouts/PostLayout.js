import React from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from '../styled/Typography';

const PostLayout = ({ title, content }) => {
  return (
    <div>
      <Title level={1}>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostLayout;
