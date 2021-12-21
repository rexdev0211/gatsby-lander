export default {
  header: {
    pt: 0,
    pb: [3, 3],
    bg: `white`,
    justifyContent: `space-between`,
    alignItems: `center`
  },
  headerWrapper: {
    bg: `white`,
    'max-width': '1008px',
    'margin': '0 auto',
    flexDirection: [`column`, 'row', 'row'],
  },
  logoContainer: {
    padding: `5px`,
    mt: [4, 0, 0],
    'text-align': ['center', `left`, `left`],
    flexBasis: ['1', `1/2`, `1/2`],
  },
  companyLogo: {
    'text-align': ['center', `right`, `right`],
    padding: `5px`,
    flexBasis: ['1', `1/2`, `1/2`],
  },
  // badge: {
  //   'text-align': `center`,
  //   padding: 2,
  //   flexBasis: ['none', `none`, `1/2`],
  //   display: [`inline`, null, `none`],
  //   'margin': '0 auto'
  // }
}
