import './PageNotFound.css'

function PageNotFound() {
  return (
    <div className="page__container mx-auto">
      <div className="title">
        <h1 className="text-uppercase">Такая страница не существует</h1>
      </div>
      <div className="image">
        <h2 className="info">404</h2>
      </div>
    </div>
  )
}

export default PageNotFound
