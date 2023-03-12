import './MainStyles.css'

function Main() {
  return (
    <div className="main__container ">
      <h1 className="main__title">FAMILY TREE</h1>
      <h2 className="main__subtitle">СОЗДАЙ СВОЕ СЕМЕЙНОЕ ДРЕВО</h2>

      <div className="main__paragraf_1">
        <p>О ПРОЕКТЕ</p>
        <p>Учебный проект, выполнен студентами курса Веб-разработчик</p>
      </div>

      <div className="main__paragraf_2">
        <p>СЕМЕЙНОЕ ДРЕВО</p>
        <p>Интерактивная таблица родных в удобном отображении</p>
      </div>

      <div className="main__paragraf_3">
        <p>КАРТА</p>
        <p>Отображение мест происхождения членов семьи на карте мира</p>
      </div>

      <div className="main__paragraf_4">
        <p>ЛИЧНЫЙ КАБИНЕТ</p>
        <p>Возможность редактировать и дополнять информацию</p>
      </div>
    </div>
  )
}

export default Main
