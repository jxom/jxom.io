import React from 'react';
import { Box, Card, Columns, Column, Container, Heading, Icon, Stack, Link, Text, applyTheme } from 'bumbag';
import { faStar } from '@fortawesome/pro-solid-svg-icons/faStar';

const ProjectCard = applyTheme(Card, {
  Content: {
    styles: {
      base: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }
  },
  defaultProps: {
    height: '230px'
  }
})

export default function ProjectsSection(props) {
  const { repos } = props;

  const [viewAllRepos, setViewAllRepos] = React.useState(false);

  return (
    <Stack width="100%">
      <Container breakpoint="tablet">
        <Heading>Featured projects</Heading>
      </Container>
      <Container breakpoint="desktop" fontSize="200">
        <Columns>
          {repos.slice(0, viewAllRepos ? 999 : 3).map(repo => (
            <Column key={repo.name} spread={4}>
              <ProjectCard>
                <Box>
                  <Text fontWeight="semibold" fontSize="300">
                    {repo.name}
                  </Text>
                  <Box marginY="major-2" />
                  <Text fontSize="200">{repo.description}</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Text fontWeight="semibold">
                      <Icon icon={faStar} type="font-awesome" /> {repo.stargazers.totalCount}
                    </Text>
                  </Box>
                  <Box>
                    {repo.homepageUrl && (
                      <React.Fragment>
                        <Link href={repo.homepageUrl} target="_blank" rel="noreferrer noopener">
                          Website
                        </Link>
                        {' · '}
                      </React.Fragment>
                    )}
                    <Link href={repo.url} target="_blank" rel="noreferrer noopener">
                      GitHub
                    </Link>
                  </Box>
                </Box>
              </ProjectCard>
            </Column>
          ))}
        </Columns>
      </Container>
      <Container breakpoint="tablet">
        <Link use="button" onClick={() => setViewAllRepos(viewAll => !viewAll)}>
          {viewAllRepos ? 'See less' : `and ${repos.length - 3} more`}
          ...
        </Link>
      </Container>
    </Stack>
  );
}
