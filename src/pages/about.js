import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import { Title, Paragraph } from '../components/styled/Typography';

export default () => {
  return (
    <PageLayout>
      <Title level={1}>About Me</Title>
      <Paragraph>
        I'm a recent Computer Science graduate from La Trobe University and
        currently working as a freelance Software Engineer in Melbourne,
        Australia.
      </Paragraph>
      <div>
        <Title level={2}>Side projects</Title>
        <Paragraph>
          I am currently working on Kihoo a full-stack web application to help
          students take notes efficiently on their computers. You can check out
          my other projects here or on Github.
        </Paragraph>
      </div>
    </PageLayout>
  );
};
