import React from 'react'
import { Container, Flex, Box, Heading, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ListItem from '@solid-ui-components/ListItem'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import styles from './_styles'
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'

const OfferTerms = ({ content: { text = [], collection, buttons } }) => (
  <Container sx={{ textAlign: `center`, mb: 3 }}>
    <Box>
      <ContentText content={text} />
    </Box>
    {collection && (
      <>
        <Reveal effect='fadeInDown'>
          <Heading variant='h6' sx={styles.heading}>Offer Terms</Heading>
          <Flex sx={styles.offerTermsBox}>
            {collection.map(({ container, ...props }, index) => (
              <Box
                key={`item-${index}`}
                sx={styles.offerTermsBoxFlex}
              >
                <ContentContainer content={container}>
                  <ListItem
                    {...props}
                    iconProps={{ round: true }}
                    vertical
                    center
                  />
                </ContentContainer>
              </Box>
            ))}
          </Flex>
          <Flex sx={styles.offerTermsBoxMobile}>
            {collection?.map((props, index) => (
              <Reveal
                key={`item-${index}`}
                effect='fadeInGrow'
                delay={0.15 * (index + 1)}
                css={css(styles.listItem)}
              >
                <ListItem {...props} iconProps={{ size: 'sm' }} center />
              </Reveal>
            ))}
          </Flex>
        </Reveal>
      </>
    )}
    {buttons && (
      <>
        <ContentButtons content={buttons} />
      </>
    )}
  </Container>
)

export default WithDefaultContent(OfferTerms)
