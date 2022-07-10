import React from 'react'
import style from './Error.module.css'
import Card from './Card';
import Button from './Button';


function Error(props) {

  return (
    <div>
    <div className={style.backdrop} onClick={props.onConfirm}/>
    <Card className={style.modal} >
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button 
        onClick={props.onConfirm}
        >Okay</Button>
      </footer>
    </Card>
  </div>
  )
}

export default Error