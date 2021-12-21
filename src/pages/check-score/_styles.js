export default {
  heroContainer: {
    bg: `#0078c9`,
    pt: [5, 5],
    pb: [5, 5],
    px: [4, 0]
  },
  heroContainerTwo: {
    bg: `white`,
    pt: [5, 5],
    pb: [5, 5],
    px: [4, 0]
  },
  contentTwoContainer: {
    bg: `omegaDarker`,
    borderRadius: `xl`,
    py: [4, 5],
    px: [4, 0]
  },
  featureBlockCta: {
    'text-align': `center`
  },
  featureBlockCtaBlue: {
    'text-align': `center`,
    bg: `#0078c9`
  },
  featuresBlock: {
    pt: [5, 5],
    pb: [5, 5],
    px: [4, 0],
    bg: `white`
  },
  buildBrandContainer: {
    pt: [5, 5],
    pb: [5, 5],
    px: [4, 0],
    bg: `#0078c9`,
    color: `white`,
    position: `relative`,
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      right: 0,
      top: `13%`,
      zIndex: -1,
      opacity: 0.3,
      backgroundSize: `40%`
    }
  }
}
