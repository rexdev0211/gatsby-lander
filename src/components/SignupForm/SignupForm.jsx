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

const SignupForm = ({ id, form: { action, fields, buttons } = {} }) => {
  const { handleSubmit, submitting, success } = useForm()
  const { formValues, setFormValues } = useContext(FormContext)
  const formId = id

  action = 'http://localhost:8000/signup'

  let button = [
    {
      text: 'Continue',
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
      <Flex sx={{ flexDirection: ['row'] }}>
        <Box
          sx={{
            width: `45%`,
            'padding-right': '5px'
          }}
        >
          <div css={css(styles.form.pRelatvie)}>
            <label css={css(styles.form.label1)}>
              First Name&nbsp;
            </label>
            <FormInput
              sx={styles.form.input}
              type='text'
              name='fname'
              onChange={onChange}
              id={`${formId}.fname`}
              value={formValues?.[formId]?.['fname'] || undefined}
            />
          </div>
        </Box>
        <Box
          sx={{
            width: `50%`
          }}
        >
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
        </Box>
      </Flex>
      <Flex sx={{ flexDirection: ['row'] }}>
        <Box
          sx={{
            width: `45%`,
            'padding-right': '5px'
          }}
        >
          <div css={css(styles.form.pRelatvie)}>
            <label css={css(styles.form.label1)}>
              Address&nbsp;
            </label>
            <FormInput
              sx={styles.form.input}
              type='text'
              name='address'
              onChange={onChange}
              id={`${formId}.address`}
              value={formValues?.[formId]?.['address'] || undefined}
            />
          </div>
        </Box>
        <Box
          sx={{
            width: `50%`
          }}
        >
          <div css={css(styles.form.pRelatvie)}>
            <label css={css(styles.form.label1)}>
              City&nbsp;
            </label>
            <FormInput
              type='text'
              name='city'
              onChange={onChange}
              id={`${formId}.city`}
              value={formValues?.[formId]?.['city'] || undefined}
            />
          </div>
        </Box>
      </Flex>
      <Flex sx={{ flexDirection: ['row'] }}>
        <Box
          sx={{
            width: `45%`,
            'padding-right': '5px'
          }}
        >
          <div css={css(styles.form.pRelatvie)}>
            <label css={css(styles.form.label1)}>
              State&nbsp;
            </label>
            <select style={styles.form.input} name='state' className='form-control' id='state'>
              <option value='0'></option>

              <option value='66'>AA - AF America</option>

              <option value='67'>AE - AF Europe</option>

              <option value='1'>AK - Alaska</option>

              <option value='2'>AL - Alabama</option>

              <option value='68'>AP - AF Pacific</option>

              <option value='3'>AR - Arkansas</option>

              <option value='69'>AS - American Samoa</option>

              <option value='4'>AZ - Arizona</option>

              <option value='5'>CA - California</option>

              <option value='6'>CO - Colorado</option>

              <option value='7'>CT - Connecticut</option>

              <option value='8'>DC - District of Columbia</option>

              <option value='9'>DE - Delaware</option>

              <option value='10'>FL - Florida</option>

              <option value='70'>FM - Micronesia</option>

              <option value='11'>GA - Georgia</option>

              <option value='71'>GU - Guam</option>

              <option value='12'>HI - Hawaii</option>

              <option value='13'>IA - Iowa</option>

              <option value='14'>ID - Idaho</option>

              <option value='15'>IL - Illinois</option>

              <option value='16'>IN - Indiana</option>

              <option value='17'>KS - Kansas</option>

              <option value='18'>KY - Kentucky</option>

              <option value='19'>LA - Louisiana</option>

              <option value='20'>MA - Massachusetts</option>

              <option value='21'>MD - Maryland</option>

              <option value='22'>ME - Maine</option>

              <option value='72'>MH - Marshall Islands</option>

              <option value='23'>MI - Michigan</option>

              <option value='24'>MN - Minnesota</option>

              <option value='25'>MO - Missouri</option>

              <option value='73'>MP - Northern Marianas</option>

              <option value='26'>MS - Mississippi</option>

              <option value='27'>MT - Montana</option>

              <option value='28'>NC - North Carolina</option>

              <option value='29'>ND - North Dakota</option>

              <option value='30'>NE - Nebraska</option>

              <option value='31'>NH - New Hampshire</option>

              <option value='32'>NJ - New Jersey</option>

              <option value='33'>NM - New Mexico</option>

              <option value='34'>NV - Nevada</option>

              <option value='35'>NY - New York</option>

              <option value='36'>OH - Ohio</option>

              <option value='37'>OK - Oklahoma</option>

              <option value='38'>OR - Oregon</option>

              <option value='39'>PA - Pennsylvania</option>

              <option value='52'>PR - Puerto Rico</option>

              <option value='74'>PW - Palau</option>

              <option value='40'>RI - Rhode Island</option>

              <option value='41'>SC - South Carolina</option>

              <option value='42'>SD - South Dakota</option>

              <option value='43'>TN - Tennessee</option>

              <option value='44'>TX - Texas</option>

              <option value='45'>UT - Utah</option>

              <option value='46'>VA - Virginia</option>

              <option value='75'>VI - Virgin Islands</option>

              <option value='47'>VT - Vermont</option>

              <option value='48'>WA - Washington</option>

              <option value='49'>WI - Wisconsin</option>

              <option value='50'>WV - West Virginia</option>

              <option value='51'>WY - Wyoming</option>

            </select>
          </div>
        </Box>
        <Box
          sx={{
            width: `50%`
          }}
        >
          <div css={css(styles.form.pRelatvie)}>
            <label css={css(styles.form.label1)}>
              Zip&nbsp;
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
      </Flex>
      <Flex sx={{ flexDirection: ['row'] }}>
        <Box
          sx={{
            width: `30%`,
            'padding-right': '5px',
            mr:2
          }}
        >
          <div css={css(styles.form.pRelatvie)}>
            <label css={css(styles.form.label1)}>
              Phone&nbsp;
            </label>
            <FormInput
              sx={styles.form.input}
              type='text'
              name='phone1'
              onChange={onChange}
              id={`${formId}.phone1`}
              value={formValues?.[formId]?.['phone1'] || undefined}
            />
          </div>
        </Box>
        <Box
          sx={{
            width: `30%`,
            mr:2
          }}
        >
          <div css={css(styles.form.pRelatvie)}>
            <FormInput
              type='text'
              name='phone2'
              onChange={onChange}
              id={`${formId}.phone2`}
              value={formValues?.[formId]?.['phone2'] || undefined}
            />
          </div>
        </Box>
        <Box
          sx={{
            width: `32%`,
            mr:2
          }}
        >
          <div css={css(styles.form.pRelatvie)}>
            <FormInput
              type='text'
              name='phone3'
              onChange={onChange}
              id={`${formId}.phone3`}
              value={formValues?.[formId]?.['phone3'] || undefined}
            />
          </div>
        </Box>
      </Flex>
      <Box>
        <p style={styles.contextText}>By providing my phone number, which may include a landline, wireless
          or mobile number, and clicking the button below to continue, I verify this is my number and consent to receive
          calls, text messages and emails via automated systems or an artificial or prerecorded voice to this number,
          regarding marketing or promotional offers and related transactions from or on behalf of Company and <span>one or more of our marketing partners listed here<span> and </span></span>.
          Message and Data rates may apply. I understand that consent is not required for purchase and I can forgo
          providing my phone number.
        </p>
      </Box>
      <Box sx={styles.buttonSubmit}>
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

export default SignupForm

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
