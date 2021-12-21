import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, css, Spinner, Flex } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import FormInput from '@solid-ui-components/ContentForm/FormInput'
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
import useForm from '@helpers/useForm'
import { FormContext } from '@solid-ui-components/ContentForm'

const styles = {
  form: {
    position: `relative`
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
    '.button-group-button + .button-group-link': {
      flex: `100%`,
      ml: 0,
      mt: 3
    }
  }
}

const PrepopForm = ({ id, form: { action, fields, buttons } = {} }) => {
  const { handleSubmit, submitting, success } = useForm()
  const { formValues, setFormValues } = useContext(FormContext)
  const formId = id

  action = 'http://localhost:8000/signup'

  let button = [
    {
      text: 'Your Scores - Now',
      type: 'SUBMIT',
      link: '',
      variant: 'secondary',
      width: '300px'
    }
  ]

  useEffect(() => {
    return () =>
      success !== undefined &&
      submitting === false &&
      setFormValues({
        ...formValues,
        [formId]: {}
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, submitting, setFormValues])

  const onChange = e => {
    setFormValues({
      ...formValues,
      [formId]: {
        ...formValues?.[formId],
        [e.target.name]: e.target.value
      }
    })
  }

  const onSubmit = e => {
    let values = formValues?.[formId]

    handleSubmit(e, { values: values, action })
  }

  return (
    <form
      css={css(styles.form)}
      onSubmit={onSubmit}
      method='POST'
      action={action}
    >
      <Flex
        as='form'
        sx={{
          flexDirection: [
            `row`
          ]
        }}
      >
        <Box
          sx={{
            flexBasis: [null, null, null, `1/1`]
          }}
        >
          <FormInput
            type='text'
            name='fname'
            placeholder={{ text: 'First Name' }}
            onChange={onChange}
            id={`${formId}.fname`}
            value={formValues?.[formId]?.['fname'] || undefined}
          />
          <br />
          <FormInput
            type='text'
            name='lname'
            placeholder={{ text: 'Last Name' }}
            onChange={onChange}
            id={`${formId}.lname`}
            value={formValues?.[formId]?.['lname'] || undefined}
          />
          <br />
          <FormInput
            type='text'
            name='email'
            placeholder={{ text: 'Email' }}
            onChange={onChange}
            id={`${formId}.email`}
            value={formValues?.[formId]?.['email'] || undefined}
          />
          <br />
          <FormInput
            type='text'
            name='zip'
            placeholder={{ text: 'Zip' }}
            onChange={onChange}
            id={`${formId}.zip`}
            value={formValues?.[formId]?.['zip'] || undefined}
          />
        </Box>
      </Flex>
      <br />
      <Box sx={{ textAlign: `center`, ['mb']: [3, 0, 0, 0] }}>
        <ContentButtons
          content={button}
          wrapperStyles={styles.buttonsWrapper}
        />
      </Box>
      <Box
        sx={styles.responseOverlay}
        css={(submitting || success) && styles.responseOverlay.active}
      >
        {submitting && (
          <Reveal effect='fadeInDown'>
            <Spinner size='64' color='alpha' />
          </Reveal>
        )}
        {success === true && (
          <Reveal effect='fadeInDown'>
            <BiCheckCircle size='64' css={css({ color: `success` })} />
          </Reveal>
        )}
        {success === false && (
          <BiErrorCircle size='64' css={css({ color: `error` })} />
        )}
      </Box>
    </form>
  )
}

export default PrepopForm

PrepopForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
