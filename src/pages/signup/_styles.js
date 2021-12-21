export default {
  headerContainer: {
    'padding-top': '0px',
    bg: `white`,
    'max-width': '1008px',
    'border-radius': '8px',
    pb: [5, 5]
  },
  heading: {
    mb: 0,
    'font-family': '\'Open Sans\',sans-serif',
    'font-weight': '300 !important',
    'text-align': 'center',
    span: {
      color: `#00bbd3`
    }
  },
  headingTwo: {
    mb: 0,
    'font-family': '\'Open Sans\',sans-serif',
    'font-weight': '300 !important',
    'text-align': 'center',
    span: {
      color: `black`,
      'font-weight': '700 !important'
    }
  },
  strategies: {
    'border-left': '1px dashed #666',
    'border-right': '1px dashed #666',
    'font-size': '0.775rem',
    'vertical-align': 'middle',
    'border': '1px solid #ddd',
    'padding': '1em 0.25em 1em'
  },
  steps: {
    background: '#1a4696',
    padding: '1em 2em',
    'overflow': 'hidden',
    'border-top-left-radius': '8px',
    'border-top-right-radius': '8px',
    licurrent: {
      'list-style-type': 'none'
    },
    li: {
      'color': '#2c63c7',
      'list-style-type': 'none',
      'float': 'left',
      'margin-right': '2%',
      'width': '23%',
      span: {
        'text-align': 'center',
        'text-transform': 'uppercase',
        'border-radius': '1000px',
        'font-weight': '700',
        'background': '#0f3273',
        'padding': '0.75em 0',
        'width': '100%',
        display: 'block',
        'font-size': '14px'
      },
      currentSpan: {
        'text-align': 'center',
        'text-transform': 'uppercase',
        'border-radius': '1000px',
        'font-weight': '700',
        'background': '#fff',
        'padding': '0.75em 0',
        'width': '100%',
        'display': 'block',
        'font-size': '14px',
        'color': '#1a4696'
      }
    }
  },
  mobileBox: {
    display: [`none`, `none`, `block`]
  },
  desktopBox: {
    'width': ['100%', null, '22%'],
    float: 'left',
    'margin-right': '3%'
  }
}
