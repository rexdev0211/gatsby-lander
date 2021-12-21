import React from 'react'
import { Container, Flex, Box, Heading, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import styles from './_styles'
import ContentImages from '@solid-ui-components/ContentImages'

const SignupHeader = ({ content: { images = [] } }) => {
  let firstLogo = {
    images: [images[0]]
  }
  let thirdLogo = {
    images: [images[2]]
  }

  return (
    <Container variant='full' sx={styles.header}>
      <Flex sx={styles.headerWrapper}>
        <Box sx={styles.logoContainer}>
          <ContentImages
            content={firstLogo}
          />
        </Box>
        <Box sx={styles.companyLogo}>
          <Reveal effect='fadeInDown'>
            <ContentImages
              content={thirdLogo}
            />
          </Reveal>
        </Box>
      </Flex>
    </Container>
  )
}

export default WithDefaultContent(SignupHeader)
