import React from 'react'
import s from './style.css'

const Container: React.FC = ({children}) => {
  return <div className={s.Container}>{children}</div>
}

export default Container
