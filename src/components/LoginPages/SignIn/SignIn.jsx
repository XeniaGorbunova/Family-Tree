import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  Button, Col, Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { LoginForm } from '../../Forms/LoginForm/LoginForm'
import '../loginPages.css'
import { getUserSelector, logIn } from '../../../redux/slices/userSlice'

function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { email: userEmail } = useSelector(getUserSelector)

  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const signInHandler = (values) => {
    console.log(values)

    const { email } = values

    if (userEmail === email) {
      dispatch(logIn(crypto.randomUUID()))
      navigate('..')
    }
    try {
      throw new Error('Неверные имя пользователя или пароль')
    } catch (e) {
      setIsError(true)
      setErrorMsg(e.message)
    }
  }

  return (
    <div className='login__container mx-auto'>
      <div className='login__title'>
        <h1 className='text-uppercase'>Добро пожаловать на наш сайт</h1>
      </div>
      <div className='login__grid'>
        <Row className='mb-3'>
          <Col className='login__form p-0'>
            <LoginForm
              submitHandler={signInHandler}
              isError={isError}
              error={errorMsg}
            />
          </Col>
          <Col className='login__right-block'>
            <div className='login__text text-uppercase text-white mb-5'>
              <span>Ваше первое дерево?</span>
            </div>
            <LinkContainer to='/signup'>
              <Button
                className='w-50 text-uppercase d-flex justify-content-center align-items-center'
                variant='green'
              >
                <span>Регистрация</span>
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SignIn
