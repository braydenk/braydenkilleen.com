import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import { Title, Paragraph } from '../components/styled/Typography';

export default () => {
  return (
    <PageLayout>
      <Title level={1}>About Me</Title>
      <Title level={2}>Graduate Software Engineer at Eggion</Title>
      <Paragraph>Currently working on - at work - spare time</Paragraph>
      <Paragraph>
        Open-source projects - list of projects contributed to
      </Paragraph>
      <Paragraph>Blog - info on the blog</Paragraph>
    </PageLayout>
  );
};
