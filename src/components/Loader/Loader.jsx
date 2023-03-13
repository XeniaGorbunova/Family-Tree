/* eslint-disable no-bitwise */
import './Loader.css'
import spinner1 from './spinner-old.gif'

const images = {
  1: spinner1,
  2: spinner1,
}

export function Loader() {
  const imgNumber = (Math.random() * 2 | 0) + 1

  return (
    <div className="box">
      <img src={images[imgNumber]} alt="spinner" className="spinner" />
    </div>
  )
}
