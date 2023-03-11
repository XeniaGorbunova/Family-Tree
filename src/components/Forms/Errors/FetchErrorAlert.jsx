import Alert from 'react-bootstrap/Alert'
import './FetchErrorAlert.css'

export function FetchErrorAlert({ isError, error }) {
  if (isError) {
    return (
      <Alert variant='danger' className='fetch-error__alert'>
        {error}
      </Alert>
    )
  }
}
