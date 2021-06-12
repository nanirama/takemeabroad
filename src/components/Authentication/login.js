import React, { useState, useContext, useEffect } from "react"
import { FirebaseContext } from "../Firebase"
//import { Form, Input, Button, ErrorMessage } from "../common"
import { Button, Form, Input, Alert } from 'reactstrap';

const Login = (props) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const { firebase, user } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")
  let isMounted = true

  useEffect(() => {
    return () => {
      isMounted = false
      
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    firebase
      .login({ email: formValues.email, password: formValues.password })
      .catch(error => {
        if (isMounted) {
          setErrorMessage(error.message)
        }
      })
  }

  function handleInputChange(e) {
    e.persist()
    setErrorMessage("")
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  function registerClickHandler(e) {
    e.preventDefault()
    props.changeState('register')
}

  return (
    <>
    {(!user || !user.email) && (
      <section>
        <Form onSubmit={handleSubmit}>
          <Input
            required
            value={formValues.email}
            name="email"
            onChange={handleInputChange}
            placeholder="email"
            type="email"
            className="form-input"
          />
          <Input
            required
            value={formValues.password}
            name="password"
            onChange={handleInputChange}
            placeholder="password"
            type="password"
            className="form-input"
          />
          {!!errorMessage && <Alert color="danger">{errorMessage}</Alert>}
          <div className="w-100 d-flex flex-row justify-content-center align-items-center mb-1 mt-1">
          <Button type="submit" className="btn-orange  mb-1 mt-1">
            Login
          </Button>
          <Button type="button" className="btn-orange  mb-1 mt-1" onClick={registerClickHandler}>
            Register
          </Button>
          </div>
        </Form>        
      </section>      
    )} 
    </>   
  )
}

export default Login
