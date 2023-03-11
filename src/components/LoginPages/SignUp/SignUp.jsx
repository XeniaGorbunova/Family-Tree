import { useState } from 'react'
import {
  Button, Col, Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getUserSelector, setNewUser } from '../../../redux/slices/userSlice'
import { LoginForm } from '../../Forms/LoginForm/LoginForm'

function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { email: userEmail } = useSelector(getUserSelector)

  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const signUpHandler = (values) => {
    setIsError(false)
    const { email } = values

    if (userEmail === email) {
      try {
        throw new Error('Пользователь с таким email уже существует')
      } catch (e) {
        setIsError(true)
        return setErrorMsg(e.message)
      }
    }

    dispatch(setNewUser(email))

    return navigate('/signin')
  }

  return (
    <div className="login__container mx-auto">
      <div className="login__title">
        <h1 className="text-uppercase">Добро пожаловать на наш сайт</h1>
      </div>
      <div className="login__grid">
        <Row className="mb-3">
          <Col className="login__form p-0">
            <LoginForm
              submitHandler={signUpHandler}
              isError={isError}
              error={errorMsg}
            />
          </Col>
          <Col className="login__right-block">
            <div className="login__text text-uppercase text-white mb-5">
              <span>Сохраните память о предках</span>
            </div>
            <LinkContainer to="/signin">
              <Button
                className="w-50 text-uppercase d-flex justify-content-center align-items-center"
                variant="green"
              >
                <span>Войти</span>
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SignUp
