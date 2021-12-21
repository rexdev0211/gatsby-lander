export default {
    form: {
        position: `relative`,
         backgroundColor: 'white',
        marginRight: '0px',
        pRelatvie: {
            position: 'relative',
        },
        input: {
            marginRight: '0px',
            border: '1px solid #dddddf',
            borderRadius: '1000px',
            height: '44px',
             color: '#333',
            backgroundColor: 'white',
            marginBottom:'15px'
        },
        
        label1: {
            fontSize: '12px',
            position: 'absolute',
            transform: 'translate(0, -50%)',
            left: '15px',
            top: '0',
            backgroundColor: 'white'
        },
        checkboxWrapper: {
            display: 'flex',
            alignItems: 'center',

            span: {
                fontSize: '.75em'
            }
        }
  },
  textaling: {
    textAlign: `center`,
    mb: [3, 0, 0, 0]
  },
  responseOverlay: {
    position: `absolute`,
    backgroundColor: `transparent`,
    width: `full`,
    height: `105%`,
    transition: `background-color 350ms ease-in`,
    textAlign: `center`,
    zIndex: -1,
    p: 3,
    top: 0,
    left: 0,
    active: {
      zIndex: 0,
      backgroundColor: `rgba(255, 255, 255, 0.85)`
    }
  },
  buttonsWrapper: {
    display: `inline-flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    width: '100%',
    '.button-group-button + .button-group-link': {
      flex: `100%`,
      ml: 0,
      mt: 3
    }
  }
}
