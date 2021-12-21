import React from 'react'
import { graphql, Link as GLink } from 'gatsby'
import { Box, Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'
import theme from './_theme'
import Divider from '@elegantstack/solid-ui-components/src/Divider'
import OfferTerms from '../../components/OfferTerms'
import ContentPage from '../../components/ContentPage'
import SignupHeader from '../../components/SignupHeader'

const SignUp = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Sign Up' />
      <SignupHeader content={content['headerSignup']}></SignupHeader>
      <Divider space='3' />
      <Container variant='cards.paper-sm' sx={styles.headerContainer}>
        <ul className='steps' style={styles.steps}>
          <Box sx={styles.desktopBox}>
            <li style={styles.steps.licurrent}>
              <span style={styles.steps.li.currentSpan}>Step 1</span>
            </li>
          </Box>
          <Box sx={styles.mobileBox}>
            <li style={styles.steps.li}>
              <span style={styles.steps.li.span}>Step 2</span>
            </li>
            <li style={styles.steps.li}>
              <span style={styles.steps.li.span}>Step 3</span>
            </li>
            <li style={styles.steps.li}>
              <span style={styles.steps.li.span}>Step 4</span>
            </li>
          </Box>
        </ul>
        {/*<OfferTerms sx={styles.strategies} content={content['strategies']} />*/}
        <ContentPage sx={styles.strategies} content={content['content']} />
      </Container>
      <Divider space='3' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
    query innerpageSignUpBlockContent {
        allBlockContent(
            filter: { page: { in: ["site/signup", "shared"] } }
        ) {
            nodes {
                ...BlockContent
            }
        }
    }
`

export default SignUp
