import React from 'react';
import {
  Box,
  Card,
  Columns,
  Column,
  Container,
  Heading,
  Icon,
  Image,
  LayoutSet,
  Link,
  List,
  Paragraph,
  Set,
  Text,
  fontSize,
  palette,
  styled
} from 'fannypack';
import fetch from 'unfetch';
import * as Loads from 'react-loads';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const SocialIconLink = styled(Link)`
  color: ${palette('text')};
  font-size: ${fontSize('500')}rem;

  &:hover {
    color: ${palette('primary')};
  }
`;

export default function Index() {
  const fetchRepos = React.useCallback(async () => {
    const res = await fetch('https://jxom-repos.now.sh');
    const repos = await res.json();
    return repos;
  }, []);
  const reposLoader = Loads.useLoads('repos', fetchRepos);
  const repos = reposLoader.response || [];

  const [viewAllRepos, setViewAllRepos] = React.useState(false);

  return (
    <Container isLayout fontSize={{ default: '400', mobile: '300' }}>
      <LayoutSet spacing="major-8" paddingY="major-6">
        <Container breakpoint="tablet">
          <LayoutSet spacing="major-2">
            <Set justifyContent="space-between" width="100%">
              <Box>
                <Heading marginBottom="0">
                  Hey, I{"'"}m Jake{' '}
                  <span role="img" aria-label="wave emoji">
                    👋
                  </span>
                </Heading>
              </Box>
              <Set spacing="major-2">
                <SocialIconLink
                  href="https://twitter.com/jxom_"
                  target="_blank"
                  rel="noopener noreferrer"
                  marginTop="0"
                >
                  <Icon icon={faTwitter} type="font-awesome" label="Twitter" />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/jxom" target="_blank" rel="noopener noreferrer" marginTop="0">
                  <Icon icon={faGithub} type="font-awesome" label="GitHub" />
                </SocialIconLink>
              </Set>
            </Set>
            <Paragraph>
              I am a web engineer who cares about accessible, performant, functional user experiences.
            </Paragraph>
            <Paragraph>
              I am currently working on{' '}
              <Link href="https://medipass.com.au" target="_blank" rel="noreferrer noopener">
                Medipass
              </Link>
              , a health claiming and payments platform enabling health providers to spend less time managing payments,
              and more time seeing patients.
            </Paragraph>
            <Paragraph>
              You can find me working on{' '}
              <Link href="https://github.com/jxom" target="_blank" rel="noreferrer noopener">
                open-source
              </Link>{' '}
              in my spare time. You
              {"'"}
              ll probably find me working on{' '}
              <Link href="https://fannypack.style" target="_blank" rel="noreferrer noopener">
                Fannypack
              </Link>
              , a React UI Kit, which actually this site was made with.
            </Paragraph>
            <Paragraph>
              When I{"'"}m not coding, and just wanna chill out, you can find me heading to a{' '}
              <Link href="https://youtu.be/43IcUCIHhQk?t=30" target="_blank" rel="noreferrer noopener">
                festival of sorts
              </Link>{' '}
              or{' '}
              <Link href="https://youtu.be/ieUgvsIVWNo?t=43" target="_blank" rel="noreferrer noopener">
                a hardcore gig
              </Link>
              .
            </Paragraph>
          </LayoutSet>
        </Container>
        <LayoutSet width="100%">
          <Container breakpoint="tablet">
            <Heading>Professional experience</Heading>
          </Container>
          <Container breakpoint="desktop" fontSize="200">
            <Columns>
              <Column>
                <Card>
                  <LayoutSet spacing="major-1">
                    <Box>
                      <Image src="/medipass-logo.svg" height="30px" alt="Medipass logo" />
                    </Box>
                    <Box>
                      <Text fontWeight="semibold" fontSize="300">
                        Lead frontend engineer
                      </Text>
                      <br />
                      <Text color="text200" fontSize="150">
                        DEC 2016 - PRESENT
                      </Text>
                    </Box>
                  </LayoutSet>
                </Card>
              </Column>
              <Column>
                <Card>
                  <LayoutSet spacing="major-1">
                    <Box>
                      <Image src="/localz.webp" height="30px" alt="Localz logo" />
                    </Box>
                    <Box>
                      <Text fontWeight="semibold" fontSize="300">
                        Frontend engineer
                      </Text>
                      <br />
                      <Text color="text200" fontSize="150">
                        AUG 2015 - DEC 2016
                      </Text>
                    </Box>
                  </LayoutSet>
                </Card>
              </Column>
              <Column>
                <Card>
                  <LayoutSet spacing="major-1">
                    <Box height="35px">
                      <Image src="/suncorp.png" height="40px" alt="Suncorp logo" />
                    </Box>
                    <Box>
                      <Text fontWeight="semibold" fontSize="300">
                        Frontend engineer
                      </Text>
                      <br />
                      <Text color="text200" fontSize="150">
                        DEC 2014 - FEB 2015
                      </Text>
                    </Box>
                  </LayoutSet>
                </Card>
              </Column>
            </Columns>
          </Container>
        </LayoutSet>
        <LayoutSet width="100%">
          <Container breakpoint="tablet">
            <Heading>Featured projects</Heading>
          </Container>
          {reposLoader.isPending && <Container breakpoint="tablet">Loading...</Container>}
          {reposLoader.isResolved && (
            <React.Fragment>
              <Container breakpoint="desktop" fontSize="200">
                <Columns>
                  {repos.slice(0, viewAllRepos ? 999 : 3).map(repo => (
                    <Column key={repo.name} spread={4}>
                      <Card
                        height="230px"
                        overrides={{
                          Card: {
                            Content: {
                              css: {
                                root: {
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'space-between'
                                }
                              }
                            }
                          }
                        }}
                      >
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
                              <Icon icon={faStar} type="font-awesome" /> {repo.stars}
                            </Text>
                          </Box>
                          <Link href={repo.url} target="_blank" rel="noreferrer noopener">
                            GitHub
                          </Link>
                        </Box>
                      </Card>
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
            </React.Fragment>
          )}
        </LayoutSet>
        <LayoutSet width="100%">
          <Container breakpoint="tablet">
            <LayoutSet spacing="major-2">
              <Heading>Talks</Heading>
              <List listStyleType="disc" listStylePosition="inside" marginLeft={{ 'min-tablet': 'major-2' }}>
                <List.Item>
                  {'"'}
                  Take a load off with React
                  {'"'}
                </List.Item>
                <List listStyleType="circle" listStylePosition="inside">
                  <List.Item>ReactConf AU, 2020</List.Item>
                  <List.Item>MelbJS, 2020</List.Item>
                  <List.Item>ComponentsConf Meetup, 2019</List.Item>
                </List>
                <List.Item>
                  {'"'}
                  Hooked on Hooks
                  {'"'}
                </List.Item>
                <List listStyleType="circle" listStylePosition="inside">
                  <List.Item>MelbJS, 2019</List.Item>
                  <List.Item>
                    <Link href="https://youtu.be/bkJ_SFhUrZ4?t=4260">React Melbourne, 2018</Link>
                  </List.Item>
                </List>
                <List.Item>
                  {'"'}
                  Async/await in Node
                  {'"'}
                </List.Item>
                <List listStyleType="circle" listStylePosition="inside">
                  <List.Item>Node Melbourne, 2017</List.Item>
                </List>
              </List>
            </LayoutSet>
          </Container>
        </LayoutSet>
      </LayoutSet>
    </Container>
  );
}
