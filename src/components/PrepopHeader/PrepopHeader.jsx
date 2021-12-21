import React from 'react'
import { Container, Flex, Box, Heading, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import styles from './_styles'
import ContentImages from '@solid-ui-components/ContentImages'

const PrepopHeader = ({ content: { images = [] } }) => {
  let firstLogo = {
    images: [images[0]]
  }
  let secondLogo = {
    images: [images[1]]
  }
  let thirdLogo = {
    images: [images[2]]
  }
  let creditCheckUp = {
    images: [images[3]]
  }
  return (
    <Container variant='full' sx={styles.header}>
      <Flex sx={styles.headerWrapper}>
        <Box sx={styles.logoContainer}>
          <ContentImages
            sx={{width:["30%", "20%", "auto"]}}
            content={firstLogo}
          />
          <div className="processorcont">
            <p>
              <Box sx={{float:["center", null, "left"]}}>
                <span style={{"font-size": "12px", padding:3}}>powered by</span>
              </Box>
              <ContentImages sx={{width:"30%", ml:2}} content={creditCheckUp} />
            </p>
          </div>
        </Box>
        <Box sx={styles.companyLogo}>
          <Reveal effect='fadeInDown'>
            <ContentImages
              sx={{width:["70%", null, "auto"]}}
              content={thirdLogo}
            />
          </Reveal>
        </Box>
      </Flex>
    </Container>
  )
}

export default WithDefaultContent(PrepopHeader)
