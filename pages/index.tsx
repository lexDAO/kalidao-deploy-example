import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Text, Stack, Box, Button } from '@kalidao/reality'

const Home: NextPage = () => {
  return (
    <Box
      minHeight="viewHeight"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="10"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as="main" space={'2'}>
        <Heading as="h1" align="center">
          Welcome to K-Plate!
        </Heading>
        <Text align="center">
          Get started by editing{' '}
          <Text color="accent" as="code" font="mono">
            pages/index.tsx
          </Text>
        </Text>
      </Stack>
      <ConnectButton />
    </Box>
  )
}

export default Home
