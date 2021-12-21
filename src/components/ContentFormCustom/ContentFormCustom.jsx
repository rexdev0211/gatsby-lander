import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, css, Spinner, Flex } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import FormInput from '@solid-ui-components/ContentForm/FormInput'
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
import useForm from '@helpers/useForm'
import { FormContext } from '@solid-ui-components/ContentForm'
import styles from './_styles'
import { Checkbox } from '@theme-ui/components'

const ContentFormCustom = ({ id, form: { action, fields, buttons } = {} }) => {
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
      <Box
        sx={{
          flexBasis: [null, null, null, `1/2`],
          ['mr']: [null, null, null, 3],
        },
        styles.form}
      >
        <div css={css(styles.form.pRelatvie)}>
          <label css={css(styles.form.label1)}>
            Full Name&nbsp;
          </label>
          <FormInput
            sx = {styles.form.input}
            type='text'
            name='fname'
            onChange={onChange}
            id={`${formId}.fname`}
            value={formValues?.[formId]?.['fname'] || undefined}
          />
        </div>
        <div css={css(styles.form.pRelatvie)}>
          <label css={css(styles.form.label1)}>
            Last Name
          </label>
          <FormInput
            type='text'
            name='lname'
            onChange={onChange}
            id={`${formId}.lname`}
            value={formValues?.[formId]?.['lname'] || undefined}
          />
        </div>
        <div css={css(styles.form.pRelatvie)}>
          <label css={css(styles.form.label1)}>
            Email
          </label>
          <FormInput
            type='text'
            name='address'
            onChange={onChange}
            id={`${formId}.address`}
            value={formValues?.[formId]?.['address'] || undefined}
          />
        </div>
        <div css={css(styles.form.pRelatvie)}>
          <label css={css(styles.form.label1)}>
            Zip Code&nbsp;&nbsp;&nbsp;
          </label>
          <FormInput
            type='text'
            name='zip'
            onChange={onChange}
            id={`${formId}.zip`}
            value={formValues?.[formId]?.['zip'] || undefined}
          />
        </div>
      </Box>
      <Box>
        <div css={css(styles.form.checkboxWrapper)}>
          <div >
          <Checkbox defaultChecked={true}  />
          </div>
          <span>
            Yes, please send special offers from thecreditreviewer.com and partners to my email.
          </span>
        </div>
      </Box>
      <br />
      <Box sx={styles.textalign}>
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

export default ContentFormCustom

ContentFormCustom.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
