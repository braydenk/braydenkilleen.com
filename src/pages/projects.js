import React from 'react';
import projectsData from '../../data/projects-data';
import styled from 'styled-components';
import PageLayout from '../components/layouts/PageLayout';
import { Paragraph } from '../components/styled/Typography';
import BlueprintImage from '../../content/images/blueprint-100.svg';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Tile = styled.div`
  border: 1px solid #c4cdd5;
  padding: 0 1rem 1rem 1rem;
  max-width: 275px;
  margin: 1rem;
`;

const TileHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f4f6f8;
`;

const TileTitle = styled.h2`
  font-size: 24px;
  line-height: 38px;
  font-weight: 500;
  margin: 20px 10px;
`;

const TileImage = styled.img`
  height: 50px;
  width: 50px;
`;

const TileBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TileDescription = styled(Paragraph)``;

const TileLink = styled.a`
  text-decoration: none;
  color: #276ef1;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  align-self: flex-end;
`;

export default () => {
  console.log(BlueprintImage)
  return (
    <PageLayout>
      <ProjectsContainer>
        {projectsData.map(project => {
          return (
            <Tile key={project.id}>
              <TileHeader>
                <TileImage src={project.icon} />
                <TileTitle>{project.title}</TileTitle>
              </TileHeader>
              <TileBody>
                <TileDescription>{project.description}</TileDescription>
                <TileLink src={project.source}>Github</TileLink>
              </TileBody>
            </Tile>
          );
        })}
      </ProjectsContainer>
    </PageLayout>
  );
};
