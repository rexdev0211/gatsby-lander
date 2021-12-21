import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import FeatureBlock from '@solid-ui-blocks/Features/Block01'
import BuildBrand from '@solid-ui-blocks/FeaturesWithPhoto/Block04'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const CheckScore = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Home' />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} reverse />
      </Container>
      <Container variant='full' sx={styles.heroContainerTwo}>
        <FeatureOne content={content['feature-one']} reverse />
      </Container>
      <Divider space='3' />
      <Container variant='full' sx={styles.whyChooseUsContainer}>
        <FeatureBlock content={content['why-choose-us']} />
      </Container>
      <Divider space='3' />
      <Container variant='full' sx={styles.featureBlockCta}>
        <FeatureBlock content={content['check-score-cta']} />
      </Container>
      <Divider space='3' />
      <Container variant='full' sx={styles.buildBrandContainer}>
        <BuildBrand content={content['build-brand']} />
        <Container variant='full' sx={styles.featureBlockCtaBlue}>
          <Divider space='3' />
          <FeatureBlock content={content['check-score-cta']} />
        </Container>
      </Container>
      <Container variant='full' sx={styles.featuresBlock}>
        <FeatureBlock content={content['why-choose-us-two']} />
      </Container>
      <Divider space='3' />
      <Container variant='full'>
        <Hero content={content['hero-three']} />
      </Container>
      <Divider space='3' />
      <Container variant='full' sx={styles.buildBrandContainer}>
        <BuildBrand content={content['build-brand-two']} />
        <Container variant='full' sx={styles.featureBlockCtaBlue}>
          <FeatureBlock content={content['check-score-cta']} />
        </Container>
      </Container>
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
    query innerpageCheckScoreBlockContent {
        allBlockContent(
            filter: { page: { in: ["site/check-score", "shared"] } }
        ) {
            nodes {
                ...BlockContent
            }
        }
    }
`

export default CheckScore
