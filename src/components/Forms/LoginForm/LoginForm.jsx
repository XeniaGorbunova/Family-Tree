import { Formik } from 'formik'
import {
  Button, Col, Form,
} from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { FetchErrorAlert } from '../Errors/FetchErrorAlert'
import { DefaultInput } from '../FormInputs/DefaultInput'
import { loginValidationSchema } from './loginValidation'

export function LoginForm({
  submitHandler, isLoading, isError, error,
}) {
  const { pathname } = useLocation()

  const initialValues = {
    email: '',
    password: '',
  }

  const getSubmitBtnTitle = () => {
    if (pathname.endsWith('in')) {
      return 'Вход'
    }
    return 'Регистрация'
  }

  return (
    <Formik
      initialValues={initialValues}
      validateOnMount
      validationSchema={loginValidationSchema}
      onSubmit={submitHandler}
    >
      {({ isValid, handleSubmit, handleClick }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group
            className="mb-5 position-relative"
            as={Col}
            controlId="email"
          >
            <DefaultInput
              type="email"
              name="email"
              placeholder="Введите логин"
              autoComplete="on"
            />
          </Form.Group>
          <Form.Group
            className="mb-5 position-relative"
            as={Col}
            controlId="password"
          >
            <DefaultInput
              type="password"
              name="password"
              placeholder="Введите пароль"
              autoComplete="on"
            />
          </Form.Group>
          <Button
            className="w-50 text-uppercase"
            type="submit"
            variant="green"
            disabled={isLoading || !isValid}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? 'Подождите...' : getSubmitBtnTitle()}
          </Button>
          <FetchErrorAlert isError={isError} error={error} />
        </Form>
      )}
    </Formik>
  )
}
