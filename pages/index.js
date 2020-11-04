import React from 'react';
import { Container, Stack } from 'bumbag';
import { GraphQLClient } from 'graphql-request';

import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import TalksSection from '../components/TalksSection';

export async function getServerSideProps() {
  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  });
  const reposResponse = await client.request(`
    {
      user(login: "jxom") {
        repositories(
          affiliations: OWNER
          first: 100
          isFork: false
          isLocked: false
          orderBy: { field: STARGAZERS, direction: DESC }
          privacy: PUBLIC
        ) {
          edges {
            node {
              name
              description
              url
              homepageUrl
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  `);
  const repos = reposResponse.user.repositories.edges.map(edge => edge.node);
  return { props: { repos } };
};

export default function Index(props) {
  const { repos } = props;
  return (
    <Container isLayout>
      <Stack spacing="major-8" paddingY="major-6">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection repos={repos} />
        <TalksSection />
      </Stack>
    </Container>
  );
}
