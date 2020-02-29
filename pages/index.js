import React from 'react';
import {
  Box,
  Button,
  Card,
  Columns,
  Column,
  Container,
  Heading,
  Image,
  LayoutSet,
  Link,
  List,
  Paragraph,
  Text
} from 'fannypack';

export default function() {
  return (
    <Container isLayout fontSize="400">
      <LayoutSet spacing="major-8" paddingY="major-6">
        <Container breakpoint="tablet">
          <LayoutSet spacing="major-2">
            <Heading>Hey, I'm Jake 👋</Heading>
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
              in my spare time.
            </Paragraph>
            <Paragraph>
              When I'm not coding, and just wanna chill out, you can find me heading to a{' '}
              <Link href="https://youtu.be/43IcUCIHhQk?t=30" target="_blank" rel="noreferrer noopener">
                festival of sorts
              </Link>{' '}
              or{' '}
              <Link href="https://youtu.be/ieUgvsIVWNo?t=43" target="_blank" rel="noreferrer noopener">
                a hardcore gig
              </Link>
              . My music choice is messed, I know lol.
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
                      <Image src="/medipass-logo.svg" height="30px" />
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
                    <Box>
                      <Link>See more...</Link>
                    </Box>
                  </LayoutSet>
                </Card>
              </Column>
              <Column>
                <Card>
                  <LayoutSet spacing="major-1">
                    <Box>
                      <Image src="/localz.webp" height="30px" />
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
                    <Box>
                      <Link>See more...</Link>
                    </Box>
                  </LayoutSet>
                </Card>
              </Column>
              <Column>
                <Card>
                  <LayoutSet spacing="major-1">
                    <Box height="35px">
                      <Image src="/suncorp.png" height="40px" />
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
                    <Box>
                      <Link>See more...</Link>
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
          <Container breakpoint="desktop">
            <Columns>
              <Column spread={4}>
                <Card>placeholder</Card>
              </Column>
              <Column spread={4}>
                <Card>placeholder</Card>
              </Column>
              <Column spread={4}>
                <Card>placeholder</Card>
              </Column>
              <Column spread={4}>
                <Card>placeholder</Card>
              </Column>
              <Column spread={4}>
                <Card>placeholder</Card>
              </Column>
              <Column spread={4}>
                <Card>placeholder</Card>
              </Column>
            </Columns>
          </Container>
          <Container breakpoint="tablet">
            <Link>See all...</Link>
          </Container>
        </LayoutSet>
        <LayoutSet width="100%">
          <Container breakpoint="tablet">
            <LayoutSet spacing="major-2">
              <Heading>Talks</Heading>
              <List listStyleType="disc" listStylePosition="inside" marginLeft="major-2">
                <List.Item>"Take a load off with React"</List.Item>
                <List listStyleType="circle" listStylePosition="inside" marginLeft="major-4">
                  <List.Item>ReactConf AU, 2020</List.Item>
                  <List.Item>MelbJS, 2020</List.Item>
                  <List.Item>ComponentsConf Meetup, 2019</List.Item>
                </List>
                <List.Item>"Hooked on Hooks"</List.Item>
                <List listStyleType="circle" listStylePosition="inside" marginLeft="major-4">
                  <List.Item>MelbJS, 2019</List.Item>
                  <List.Item>
                    <Link href="https://youtu.be/bkJ_SFhUrZ4?t=4260">React Melbourne, 2018</Link>
                  </List.Item>
                </List>
                <List.Item>"Async/await in Node"</List.Item>
                <List listStyleType="circle" listStylePosition="inside" marginLeft="major-4">
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
