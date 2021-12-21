import React from 'react'
import {
  Container,
  Flex,
  Box,
  css,
  Heading
} from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentImages from '@solid-ui-components/ContentImages'
import SignupForm from '../SignupForm'
import styles from './_styles'

const ContentPage = ({ content: { collection }, reverse }) => {
  let firstLogo = null
  let secondLogo = null
  let thirdLogo = null
  let sslSeal = null
  let virusScan = null
  let badge = null
  let arrow = null

  if (collection.length) {
    firstLogo = {
      images: [collection[0]['images'][0]]
    }

    secondLogo = {
      images: [collection[0]['images'][1]]
    }

    thirdLogo = {
      images: [collection[0]['images'][2]]
    }
    sslSeal = {
      images: [collection[0]['images'][3]]
    }
    virusScan = {
      images: [collection[0]['images'][4]]
    }
    badge = {
      images: [collection[0]['images'][5]]
    }
    arrow = {
      images: [collection[0]['images'][6]]
    }
  }

  return (
    <Container>
      <Divider space='2' />
      <Flex
        sx={{
          flexDirection: [
            reverse ? `column-reverse` : `column`,
            null,
            null,
            reverse ? `row-reverse` : `row`
          ]
        }}
      >
        <Box
          sx={{
            flexBasis: [null, null, null, `3/4`],
            [reverse ? 'ml' : 'mr']: [null, null, null, 3],
            position: `relative`
          }}
        >
          <Divider space='2' />
          <Box sx={styles.sealBox}>
            <Flex sx={styles.sealWrapper}>
              <Box sx={styles.secureText}>
                <ContentImages
                  content={firstLogo}
                  sx={styles.firstLogo}
                />
                <Heading variant='h5' sx={styles.header}>SECURE SITE</Heading>
                <Heading sx={styles.headerSubtitle}>WE ARE COMMITTED TO PROTECTING YOUR INFORMATION</Heading>
              </Box>
              <Box sx={styles.secureLogo}>
                <Flex sx={{ml:10, flexDirection: [`row`, 'row', 'row'],}}>
                  <Box sx={{margin:"auto"}}>
                    <ContentImages
                      content={sslSeal}
                      sx={styles.sealImages}
                    />
                  </Box>
                  <Box sx={{margin:"auto"}}>
                    <ContentImages
                      content={virusScan}
                      sx={styles.sealImages}
                    />
                  </Box>
                  <Box sx={{margin:"auto"}}>
                    <ContentImages
                      content={badge}
                      sx={styles.badge}
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Heading sx={styles.formHeader}>
              Please provide your name and address so we can locate your credit file
            </Heading>
            <SignupForm id={`form.signup`} />
          </Box>
        </Box>
        <Box
          sx={{
            flexBasis: `1/3`,
            textAlign: [`center`, null, null, `right`]
          }}
        >
          <Divider space='2' />
          <ContentImages content={thirdLogo} sx={{ 'text-align': 'center' }} />
          <Divider space='2' />
          <Box sx={styles.contentBox}>
            <Heading variant='h5' sx={styles.contextHeading}>WHAT ARE THE BENEFITS OF MY THECREDITREVIEWER.COM MEMBERSHIP?</Heading>
            <p style={styles.contextText}>
              You will have unlimited access to:
            </p>
            <ul style={styles.contextText}>
              <li>24/7 Credit Monitoring</li>
              <li>Alerts About Changes in Your Credit</li>
              <li>Credit Education Center Access</li>
              <li>Social Security Number Monitoring</li>
              <li>Identity Theft Protection</li>
            </ul>
          </Box>
          <Box sx={styles.contentBox}>
            <Heading variant='h5' sx={styles.contextHeading}>SHOULD I EXPECT TO FIND ERRORS IN MY CREDIT PROFILE?</Heading>
            <p style={styles.contextText}>
              It's likely, according to financial experts and analysts. Your credit report can include errors and inaccuracies that can lower your credit score. As a member of thecreditreviewer.com, you'll have access to your credit report from all 3 credit bureaus - TransUnion, Experian, Equifax - so you can be sure that your credit information is correct.
            </p>
          </Box>

          {collection?.[1] && (
            <Reveal effect='fadeInLeft'>
              {collection[1]?.buttons && (
                <>
                  <Divider space={3} />
                  <Reveal
                    effect='fadeInRight'
                    delay={1}
                    css={css({ mb: [4, null, null, 0] })}
                  >
                    <ContentButtons sx={{
                      'font-family': 'Tahoma,sans-serif',
                      'font-size': '23px',
                      'font-weight': 'bold'
                    }} content={collection[1].buttons} />
                  </Reveal>
                </>
              )}
            </Reveal>
          )}
        </Box>
      </Flex>
    </Container>
  )
}

export default WithDefaultContent(ContentPage)
