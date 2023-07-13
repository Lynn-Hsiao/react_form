import { useState, useEffect } from 'react'
import styles from './InputForm.module.css'

export default function InputForm () {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isClicked, setIsClicked] =useState(false)

  useEffect( () => {setIsClicked(false)}, [name, email])

  function handleClick (e) {
    e.preventDefault()
    setIsClicked(true)
  }
  
  return (
    <>
      <div className={styles.content}>
        <h3 className={styles.formItem}>
          Name:
        </h3>
        <form>
          <input type="text" placeholder="Please Enter Your Name." className={styles.formInput} onChange={e => {setName(e.target.value)}}/>
        </form>
        <h3 className={styles.formItem}>
          E-mail:
        </h3>
        <form>
          <input type="email" placeholder="Please Enter Your E-mail." className={styles.formInput} onChange={e => {setEmail(e.target.value)}} />
        </form>
        <button className={styles.submitBtn} onClick={handleClick}>
          Submit
        </button>
      </div>
      <div className={styles.output}>
        <div className={styles.outputFrame}>
          <h1 className={styles.outputTitle}>Output Data</h1>
          {isClicked && 
            <>
              <h2 className={styles.outputItem}>Name : {name} </h2>
              <h2 className={styles.outputItem}>Email : {email} </h2>
            </>
          }
        </div>
      </div>
    </>
  )
}