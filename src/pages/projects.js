import React from 'react';
import projectsData from '../data/projects-data';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PageLayout from '../components/layouts/PageLayout';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

const ProjectsTile = styled.div`
  border: 1px solid black;
`;

export default () => {
  return (
    <PageLayout>
      <ProjectsGrid>
        {projectsData.map(project => {
          return (
            <ProjectsTile key={project.id}>
              <div>
                <div>Project Icon / Logo</div>
                <h2>Project Title</h2>
              </div>
              <div>
                <p>Project Description</p>
                <Link to="/">Project Link</Link>
              </div>
            </ProjectsTile>
          );
        })}
      </ProjectsGrid>
    </PageLayout>
  );
};
