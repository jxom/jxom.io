import React from 'react';
import { Avatar, Box, Heading, Link, List, Icon, Paragraph, Stack, Text } from 'bumbag';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons/faEnvelope';
import { faGlobe } from '@fortawesome/pro-solid-svg-icons/faGlobe';
import { faGithub } from '@fortawesome/fontawesome-free-brands/faGithub';
import { faTwitter } from '@fortawesome/fontawesome-free-brands/faTwitter';

export default function CV(props) {
  return (
    <Box minHeight="100vh" backgroundColor="primary" display={{ default: 'flex', 'max-tablet': 'block' }}>
      <Box alignX="right" width="33vw" minWidth={{ default: '350px', 'max-tablet': '100%' }} backgroundColor="primary">
        <Box width={{ default: '350px', 'max-tablet': '100%' }} color="white" paddingX="major-3" paddingY="major-4">
          <Stack spacing="major-5">
            <Stack spacing="major-3">
              <Avatar src="/jake.jpeg" variant="circle" size="100px" />
              <Heading>Jake Moxey</Heading>
              <Stack spacing="major-2">
                <Link.Block color="white" fontWeight="semibold" href="mailto:jakemoxey@gmail.com">
                  <Icon icon={faEnvelope} type="font-awesome" marginRight="major-1" />
                  jakemoxey@gmail.com
                </Link.Block>
                <Link.Block color="white" fontWeight="semibold" href="https://jxom.io">
                  <Icon icon={faGlobe} type="font-awesome" marginRight="major-1" />
                  jxom.io
                </Link.Block>
                <Link.Block color="white" fontWeight="semibold" href="https://github.com/jxom">
                  <Icon icon={faGithub} type="font-awesome" marginRight="major-1" />
                  github.com/jxom
                </Link.Block>
                <Link.Block color="white" fontWeight="semibold" href="https://twitter.com/jxom_">
                  <Icon icon={faTwitter} type="font-awesome" marginRight="major-1" />
                  twitter.com/jxom_
                </Link.Block>
              </Stack>
            </Stack>
            <Stack spacing="major-3">
              <Heading use="h2" fontSize="500">
                About me
              </Heading>
              <Stack spacing="major-3">
                <Paragraph>
                  I am a software engineer who cares about accessible, performant, functional, pixel-perfect user
                  experiences. My goal is to create these amazing user experiences without compromising developer experience.
                </Paragraph>
                <Paragraph>
                  I am currently working on{' '}
                  <Link
                    color="white"
                    href="https://medipass.com.au"
                    fontWeight="bold"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Medipass
                  </Link>
                  , a health claiming and payments platform enabling health providers to spend less time managing
                  payments, and more time seeing patients.{' '}
                </Paragraph>
                <Paragraph>
                  On the weekends, I'm working on my new side-hustle called{' '}
                  <Link
                    color="white"
                    href="https://mindcellar.co"
                    fontWeight="bold"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Mindcellar
                  </Link>
                  . Mindcellar is a community-based platform that allows you to discover, curate, organise and
                  internalise knowledge & learnings through domain-specific communities. There is a gap to fill for
                  discovering new knowledge & learnings with a community backing; and we want to help people learn
                  better, together.
                </Paragraph>
                <Paragraph>
                  You can find me working on open-source in my spare time – I love working on UI/UX systems and tooling.
                  You'll probably find me working on{' '}
                  <Link
                    color="white"
                    href="https://medipass.com.au"
                    fontWeight="bold"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bumbag
                  </Link>{' '}
                  (a React UI Kit) or{' '}
                  <Link
                    color="white"
                    href="https://medipass.com.au"
                    fontWeight="bold"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    React Loads
                  </Link>{' '}
                  (a tool to help with external data fetching) .
                </Paragraph>
              </Stack>
            </Stack>
            <Stack spacing="major-3">
              <Heading use="h2" fontSize="500">
                My Dream Stack
              </Heading>
              <Paragraph>
                HTML/CSS/JS, React, React Native, Next.js/Gatsby, Node, NPM, GraphQL/REST, React Query, CSS-in-JS
                (Stitches, Emotion, Styled Components), Lerna, Design Systems, Jest, Cypress, OSS, UX tooling, build
                tooling, CI/CD scripting, Typescript/Flow, ES2020, State Machines, Redux, Recoil.
              </Paragraph>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box flex="4" backgroundColor="white" minHeight="100vh" paddingY="major-5" paddingX="major-3">
        <Box maxWidth="60ch">
          <Stack spacing="major-6">
            <Stack>
              <Heading use="h2">Professional experience</Heading>
              <Stack spacing="major-6">
                <Stack spacing="major-3">
                  <Stack spacing="major-1">
                    <Text.Block fontWeight="semibold" fontSize="300">
                      Lead Frontend Engineer
                    </Text.Block>
                    <Text.Block fontSize="250" fontWeight="500">
                      Medipass{' '}
                      <Text marginLeft="major-1" fontSize="150" color="gray">
                        Dec 2016 - Present
                      </Text>
                    </Text.Block>
                  </Stack>
                  <Stack spacing="major-2">
                    <Text.Block fontWeight="semibold">The stack</Text.Block>
                    <Text.Block>
                      JavaScript (ES2020), React, React Native, Redux,{' '}
                      <Link href="https://github.com/jxom/react-loads" target="_blank" rel="noreferrer noopener">
                        React Loads
                      </Link>
                      ,{' '}
                      <Link href="https://github.com/bumbag/bumbag-ui" target="_blank" rel="noreferrer noopener">
                        Bumbag
                      </Link>{' '}
                      (w/ Emotion), Flow/TypeScript, Jest, Cypress, Travis, Node, REST, MongoDB, Redis, Java
                    </Text.Block>
                  </Stack>
                  <Stack spacing="major-2">
                    <Text.Block fontWeight="semibold">Responsibilities</Text.Block>
                    <List listStyleType="disc" marginLeft="major-4">
                      <List.Item>
                        Lead the architecture & infrastructure of the Medipass web portals (React) and tooling since
                        Medipass’ inception. These portals include the provider, patient & insurer-facing web apps.
                      </List.Item>
                      <List.Item>
                        Adopted a monorepo of config, tooling & components (powered by Lerna & Yarn Workspaces) to power
                        the internals of the Medipass web apps.
                      </List.Item>
                      <List.Item>
                        Worked tightly with the product & design teams to deliver an effective, but pixel-perfect
                        product to our customers.
                      </List.Item>
                      <List.Item>
                        Lead the development of Medipass’ Javascript SDK for health software partners to streamline
                        health claiming & payments for their patients.
                      </List.Item>
                      <List.Item>
                        Created & collaborated on several open-source projects under the Medipass organisation.
                      </List.Item>
                      <List.Item>
                        Worked closely with the design team to adopt Medipass’ design system, powered by the open source
                        React UI Kit{' '}
                        <Link href="https://bumbag.style" target="_blank" rel="noopener noreferrer">
                          Bumbag
                        </Link>
                        .
                      </List.Item>
                      <List.Item>
                        Collaborated on Medipass’ API (Node/REST) to develop new capabilities including our automated
                        Blue/Green web deployments.
                      </List.Item>
                      <List.Item>
                        Collaborated on Medipass’ Mobile App (React Native/Java) to develop new capabilities including
                        the ability to book an appointment, accept payments, and manage your user profile, and created
                        an open-source library (React Native Pinch) to help with data fetching w/ SSL pinning.
                      </List.Item>
                    </List>
                  </Stack>
                </Stack>
                <Stack spacing="major-3">
                  <Stack spacing="major-1">
                    <Text.Block fontWeight="semibold" fontSize="300">
                      Fullstack Engineer
                    </Text.Block>
                    <Text.Block fontSize="250" fontWeight="500">
                      Localz{' '}
                      <Text marginLeft="major-1" fontSize="150" color="gray">
                        Aug 2015 - Dec 2016
                      </Text>
                    </Text.Block>
                  </Stack>
                  <Stack spacing="major-2">
                    <Text.Block fontWeight="semibold">The stack</Text.Block>
                    <Text.Block>JavaScript, React, Redux, Angular</Text.Block>
                  </Stack>
                  <Stack spacing="major-2">
                    <Text.Block fontWeight="semibold">Responsibilities</Text.Block>
                    <List listStyleType="disc" marginLeft="major-4">
                      <List.Item>
                        Lead the development of Localz’ Push Notification web portal (Angular) & Click-and-collect web
                        portal (React).
                      </List.Item>
                      <List.Item>
                        Collaborated on the Localz Partner web portal (Angular) & Partner API (Node/REST) to implement
                        new capabilities such as device & beacon management.
                      </List.Item>
                    </List>
                  </Stack>
                </Stack>
                <Stack spacing="major-3">
                  <Stack spacing="major-1">
                    <Text.Block fontWeight="semibold" fontSize="300">
                      Frontend Engineer
                    </Text.Block>
                    <Text.Block fontSize="250" fontWeight="500">
                      Suncorp{' '}
                      <Text marginLeft="major-1" fontSize="150" color="gray">
                        Dec 2014 - Aug 2015
                      </Text>
                    </Text.Block>
                  </Stack>
                  <Stack spacing="major-2">
                    <Text.Block fontWeight="semibold">The stack</Text.Block>
                    <Text.Block>JavaScript, Angular 1, Java, Springboot, Jenkins</Text.Block>
                  </Stack>
                  <Stack spacing="major-2">
                    <Text.Block fontWeight="semibold">Responsibilities</Text.Block>
                    <List listStyleType="disc" marginLeft="major-4">
                      <List.Item>
                        Worked closely with the business, product & design teams to build the AAMI Customer Hub
                        (Angular).
                      </List.Item>
                      <List.Item>
                        Developed new capabilities in the Claiming & Quote microservices (Java/Springboot) which powers
                        the AAMI Customer Hub.
                      </List.Item>
                    </List>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Heading use="h2">Side hustles</Heading>
              <Stack spacing="major-3">
                <Stack spacing="major-2">
                  <Text.Block fontWeight="semibold" fontSize="300">
                    <Link href="https://mindcellar.co" target="_blank" rel="noreferrer noopener">
                      Mindcellar
                    </Link>{' '}
                  </Text.Block>
                  <Paragraph>
                    Mindcellar is a community-based platform that allows you to discover, curate, organise and
                    internalise knowledge & learnings through domain-specific communities. There is a gap to fill for
                    discovering new knowledge & learnings with a community backing; and we want to help people learn
                    better, together.
                  </Paragraph>
                </Stack>
                <Stack spacing="major-2">
                  <Text.Block fontWeight="semibold">The stack</Text.Block>
                  <Text.Block>
                    JavaScript (ES2020), TypeScript, React, <Link href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">Next.js</Link> + <Link href="https://blitzjs.com/" target="_blank" rel="noreferrer noopener">Blitz.js</Link>, GraphQL, Prisma, Postgres, Bumbag (w/
                    Emotion), <Link href="https://react-query.tanstack.com/" target="_blank" rel="noreferrer noopener">React Query</Link>, Node.js
                  </Text.Block>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Heading use="h2">Talks</Heading>
              <Stack spacing="major-2">
                <Link.Block
                  href="https://youtu.be/XpdernT9E64"
                  target="_blank"
                  rel="noreferrer noopener"
                  fontWeight="semibold"
                  fontSize="300"
                >
                  Take a load off with React
                </Link.Block>
                <Stack spacing="minor-3">
                  <Text.Block>Presented at:</Text.Block>
                  <List listStyleType="disc" marginLeft="major-4">
                    <List.Item>ReactConfAU, 2020</List.Item>
                    <List.Item>MelbJS, 2020</List.Item>
                    <List.Item>ComponentsConf, 2019</List.Item>
                  </List>
                </Stack>
              </Stack>
              <Stack spacing="major-2">
                <Link.Block
                  href="https://youtu.be/bkJ_SFhUrZ4?t=4260"
                  target="_blank"
                  rel="noreferrer noopener"
                  fontWeight="semibold"
                  fontSize="300"
                >
                  Hooked on React Hooks
                </Link.Block>
                <Stack spacing="minor-3">
                  <Text.Block>Presented at:</Text.Block>
                  <List listStyleType="disc" marginLeft="major-4">
                    <List.Item>MelbJS, 2019</List.Item>
                    <List.Item>React Melbourne, 2018</List.Item>
                  </List>
                </Stack>
              </Stack>
              <Stack spacing="major-2">
                <Text.Block fontWeight="semibold" fontSize="300">
                  Async/await in Node
                </Text.Block>
                <Stack spacing="minor-3">
                  <Text.Block>Presented at:</Text.Block>
                  <List listStyleType="disc" marginLeft="major-4">
                    <List.Item>Node Melbourne, 2017</List.Item>
                  </List>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Heading use="h2">Featured OSS projects</Heading>
              <Stack spacing="major-2">
                <Text.Block fontWeight="semibold" fontSize="300">
                  <Link href="https://bumbag.style" target="_blank" rel="noreferrer noopener">
                    Bumbag UI
                  </Link>{' '}
                  (
                  <Link href="https://github.com/bumbag/bumbag-ui" target="_blank" rel="noreferrer noopener">
                    GitHub
                  </Link>
                  )
                </Text.Block>
                <Paragraph>
                  Bumbag is an accessible, themeable and composable React UI Kit suitable for MVPs or large-scale
                  applications.
                </Paragraph>
              </Stack>
              <Stack spacing="major-2">
                <Text.Block fontWeight="semibold" fontSize="300">
                  React Loads (
                  <Link href="https://github.com/jxom/react-loads" target="_blank" rel="noreferrer noopener">
                    GitHub
                  </Link>
                  )
                </Text.Block>
                <Paragraph>
                  React Loads is a backend agnostic library to help with external data fetching & caching in your UI
                  components.
                </Paragraph>
              </Stack>
              <Stack spacing="major-2">
                <Text.Block fontWeight="semibold" fontSize="300">
                  React Payment Inputs (
                  <Link
                    href="https://github.com/medipass/react-payment-inputs"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </Link>
                  )
                </Text.Block>
                <Paragraph>A React Hook & Container to help with payment card input fields.</Paragraph>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
