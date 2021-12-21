export default {
  form: {
    position: `relative`,
    backgroundColor: 'white',
    marginRight: '0px',
    pRelatvie: {
      position: 'relative',
      mt: 4
    },
    input: {
      'display': 'block',
      'width': '100%',
      'height': '34px',
      'padding': '6px 12px',
      'fontSize': '14px',
      'lineHeight': '1.42857143',
      'color': '#555',
      'backgroundColor': '#fff',
      'backgroundImage': 'none',
      'border': '1px solid #ccc',
      'borderRadius': '4px',
      'WebkitBoxShadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
      'boxShadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
      'WebkitTransition': 'border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s',
      'Transition': 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
      'transition': 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
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
    'display': 'inline-block',
    'marginBottom': '0',
    'lineHeight': '1.42857143',
    'textAlign': 'center',
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle',
    'MsTouchAction': 'manipulation',
    'touchAction': 'manipulation',
    'cursor': 'pointer',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none',
    'backgroundImage': 'none',
    'border': '1px solid transparent',
    'fontFamily': 'Tahoma,sans-serif',
    'fontSize': '23px',
    'fontWeight': 'bold',
    'width': '100%',
    'borderRadius': '1000px',
    'padding': '10px',
    'color': '#fff',
    'transition': 'background-color .3s'
  },
  buttonSubmit: {
    mt: 4,
    width:[`100%`, null, `50%`],
    mb:3,
    margin:`auto`
  },
  contextText: {
    'fontSize': '10px',
    'fontWeight': '300',
    'color': '#000',
    'margin-bottom': '10px !important',
    'text-align': 'left',
    'margin-top': '10px !important',
  },
  contextTextCTA: {
    'fontSize': '12px',
    'fontWeight': '300',
    'color': '#000',
    'margin-bottom': '10px !important',
    'text-align': 'left'
  }
}
