import React from 'react';
import { Box, Container, Heading, Icon, Stack, Link, Paragraph, Set, fontSize, palette, styled } from 'fannypack';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const SocialIconLink = styled(Link)`
  color: ${palette('text')};
  font-size: ${fontSize('500')}rem;

  &:hover {
    color: ${palette('primary')};
  }
`;

export default function About() {
  return (
    <Container breakpoint="tablet">
      <Stack spacing="major-2">
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
            <SocialIconLink href="https://twitter.com/jxom_" target="_blank" rel="noopener noreferrer" marginTop="0">
              <Icon icon={faTwitter} type="font-awesome" label="Twitter" />
            </SocialIconLink>
            <SocialIconLink href="https://github.com/jxom" target="_blank" rel="noopener noreferrer" marginTop="0">
              <Icon icon={faGithub} type="font-awesome" label="GitHub" />
            </SocialIconLink>
          </Set>
        </Set>
        <Paragraph>I am a web engineer who cares about accessible, performant, functional user experiences.</Paragraph>
        <Paragraph>
          I am currently working on{' '}
          <Link href="https://medipass.com.au" target="_blank" rel="noreferrer noopener">
            Medipass
          </Link>
          , a health claiming and payments platform enabling health providers to spend less time managing payments, and
          more time seeing patients.
        </Paragraph>
        <Paragraph>
          You can find me working on{' '}
          <Link href="https://github.com/jxom" target="_blank" rel="noreferrer noopener">
            open-source
          </Link>{' '}
          in my spare time. You
          {"'"}
          ll probably find me working on{' '}
          <Link href="https://v5.fannypack.style" target="_blank" rel="noreferrer noopener">
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
      </Stack>
    </Container>
  );
}
