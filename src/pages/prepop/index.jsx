import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Heading, Flex } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'
import theme from './_theme'
import Divider from '@elegantstack/solid-ui-components/src/Divider'
import PrepopHeader from '../../components/PrepopHeader'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentFormCustom from '../../components/ContentFormCustom'

const PrePop = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  let scoreCard = {
    images: [content.content.images[0]]
  }
  let computer = {
    images: [content.content.images[1]]
  }
  let sign = {
    images: [content.content.images[2]]
  }
  let download = {
    images: [content.content.images[3]]
  }
  let comp = {
    images: [content.content.images[4]]
  }
  let bar = {
    images: [content.content.images[5]]
  }
  let arrow = {
    images: [content.content.images[6]]
  }
  let check = {
    images: [content.content.images[7]]
  }
  let badge = {
    images: [content.content.images[8]]
  }

  let now = new Date()
  let monNames = new Array('Jan.', 'Feb.', 'March', 'April', 'May', ' June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.')
  let dateString = monNames[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear()
  let dateStringFuture = monNames[now.getMonth()] + ' ' + (now.getDate() + 6) + ', ' + now.getFullYear()

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Sign Up' />
      <PrepopHeader content={content['headerSignup']}></PrepopHeader>
      <Divider space='1' />
      <Container variant='full' sx={styles.headerContainer}>
        <Box sx={styles.headerContainerBox}>
          <Heading variant='h1' sx={styles.heading}>
            Get Your <span sx={styles.heading.coloredSpan}> Free Credit Scores</span><br />
          </Heading>
          <Heading variant='h2' sx={styles.headingTwo}>
            from <span sx={styles.headingTwo.span}>All 3 Bureaus</span> as of <span
            sx={styles.headingTwo.span}> {dateString} </span>
          </Heading>
          <Flex sx={{
            flexDirection: [`row`],
            'text-align': 'center',
            'margin': 'auto',
            color: 'black'
          }}>
            <Box sx={styles.width}>
              <p sx={styles.offerTerms}> w/7-Day Trial<br />Ends&nbsp; {dateStringFuture}</p>
            </Box>
            <Box sx={styles.width}>
              <p sx={styles.offerTerms}> Monthly Membership of $39.90 <br />automatically billed to account after trial
              </p>
            </Box>
            <Box sx={styles.width}>
              <p sx={styles.offerTerms1} > For questions or to cancel,
                call <br /> 844-878-8351 or login to account</p>
            </Box>
          </Flex>
          <Box sx={styles.scoreCard}>
            <ContentImages content={scoreCard} />
            <ContentImages sx={styles.arrow} content={arrow} />
          </Box>
        </Box>
      </Container>
      <Container variant='full' sx={styles.middleContainerBox}>
        <Box sx={styles.middleContainer}>
          <Flex sx={styles.middle}>
            <Box sx={styles.middle2}>
              <ContentImages content={computer} />
            </Box>
            <Box sx={styles.width}>
              <Box sx={styles.form}>
                <ContentImages sx={styles.badge} content={badge} />
                <Heading variant='h3' sx={styles.headingTree}>
                  <span sx={styles.headingTree}> Start Here</span><br />
                </Heading>
                <ContentFormCustom id={`form.signup`} />
                <Box sx={styles.formimg}>
                  <ContentImages sx={styles.width2} content={download} />
                </Box>
              </Box>
            </Box>
            <Box sx={styles.middle3}>
              <Heading variant='h2' sx={styles.benefits}>
                Benefits
              </Heading>
              <Box style={styles.boxs}>
                <ul style={styles.padding}>
                  <li style={styles.benefits.li}>
                    <ContentImages sx={styles.img} content={check} />
                    <strong>Instantly</strong> Access Your 3 Credit Scores
                  </li>
                  <li style={styles.benefits.li}>
                    <ContentImages sx={styles.img} content={check} />
                    <strong>Secure</strong> Online Delivery
                  </li>
                  <li style={styles.benefits.li}>
                    <ContentImages sx={styles.img} content={check} />
                    <strong>Daily</strong> 3 Bureau Credit Monitoring
                  </li>
                  <li style={styles.benefits.li}>
                    <ContentImages sx={styles.img} content={check} />
                    <strong>Roadside</strong> Assistance
                  </li>
                </ul>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
      <Container variant='full' sx={styles.thirdContainerBox}>
        <Box sx={styles.thirdContainer}>
          <Flex sx={styles.third}>
            <Box sx={styles.third1}>
              <ContentImages content={sign} />
            </Box>
            <Box sx={styles.width}>
              <p style={styles.third2}> CHECKING YOUR CREDIT WILL NOT HARM YOUR SCORE</p>
            </Box>
            <Box sx={styles.third1}>
              <ContentImages sx={{ width: '50%' }} content={download} /></Box>
          </Flex>
        </Box>
      </Container>
      <Container variant='full' sx={styles.headerContainer}>
        <Box sx={styles.headerContainerBox}>
          <Flex sx={styles.full}>
            <Box sx={styles.third1}>
              <ContentImages sx={{ width: '60%' }} content={comp} />
            </Box>
            <Box sx={styles.width}>
              <Heading variant='h6'>
                WHY DO I NEED TO CHECK MY CREDIT SCORE?
              </Heading>
              <p style={styles.full2}> A good credit score is your passport to competitive interest rates for mortgages, cars, credit card
                offers, job offers, insurance premiums and more. A strong score is worth money because it saves you in
                excess costs.</p>
            </Box>
            <Box sx={styles.width}>
              <ContentImages sx={{ width: '90%' }} content={bar} /> </Box>
          </Flex>
           <Box sx={styles.footer1}> © 2021 thecreditreviewer.com All Rights Reserved. Privacy Policy | Terms of Service | Contact Us <br />

thecreditreviewer.com is the proud owner of this website.3955 Vineyard Ave Apt 70 Pleasanton, CA 94566<br />

Important Information: The credit score(s) you receive from us may not be the same scores used by lenders or other commercial users for credit decisions. There are various types of credit scores, and lenders may use a different type of credit score to make lending decisions than the ones being offered.<br />

Under federal law you have the right to receive a Credit Report from each of the three nationwide consumer reporting agencies once every 12 months. A Credit Score is not included.<br />

After verification of your identity, your scores are available for immediate online delivery securely. Scores shown are for illustrative purposes only.<br />

thecreditreviewer.com provides you with the tools you need to access and monitor your financial profile through the program's credit reporting and monthly monitoring benefits. thecreditreviewer.com Credit Monitoring and its benefit providers are not credit repair service providers and do not receive fees for such services, nor are they credit clinics, credit repair or credit services organizations or businesses. Credit information is provided either by Transunion® and TransUnion Interactive, Inc. or Experian and CSIdentity Corporation. <br />

All product and company names and trademarks mentioned herein are the property of their respective owners.</Box> 
        </Box>
      </Container>
      <Divider space='3' />
      
     </Layout>
  )
}

export const query = graphql`
    query innerpagePrePopBlockContent {
        allBlockContent(
            filter: { page: { in: ["site/prepop", "shared"] } }
        ) {
            nodes {
                ...BlockContent
            }
        }
    }
`

export default PrePop
