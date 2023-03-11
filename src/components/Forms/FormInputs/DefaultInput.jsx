import { useField } from 'formik'
import { useState } from 'react'
import { Form } from 'react-bootstrap'

export function DefaultInput({ ...props }) {
  const { type, autoComplete, placeholder } = props

  const [field, meta] = useField(props)

  const { value } = field
  const { error, touched } = meta

  const [isFocus, setIsFocus] = useState(false)
  const handleFocus = () => setIsFocus(true)
  const showFeedback = (!!isFocus && value.trim().length > 2) || touched

  return (
    <>
      <Form.Control
        {...props}
        type={type ?? 'text'}
        autoComplete={autoComplete ?? 'off'}
        onFocus={handleFocus}
        placeholder={placeholder.toUpperCase()}
        isInvalid={showFeedback && error}
        isValid={showFeedback && !error}
        {...field}
      />
      {showFeedback ? (
        <Form.Control.Feedback type='invalid' tooltip>
          {error}
        </Form.Control.Feedback>
      ) : null}
    </>
  )
}
