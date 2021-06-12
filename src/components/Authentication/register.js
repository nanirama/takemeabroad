import React, { useState, useContext, useEffect } from "react"
import { Button, Form, Input, Alert } from 'reactstrap';
import {FirebaseContext} from '../Firebase';

const Register = (props) => {
  const {firebase} = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  let isMounted = true;

  useEffect(() => {
    return () => {
      isMounted = false;
    }
  }, [])

  function handleInputChange(e){
    e.persist();
    setErrorMessage('');
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();

    if(formValues.password === formValues.confirmPassword){
      firebase.register({
        username: formValues.username,
        email: formValues.email,
        password: formValues.password
      }).catch(error => {
        if(isMounted) {
          setErrorMessage(error.message);
        }
      })
    }else{
      setErrorMessage('Password and Confirm Password fields must match')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input onChange={handleInputChange} value={formValues.username} placeholder="username" type="text" required name="username" className="form-input"/>
      <Input onChange={handleInputChange} value={formValues.email} placeholder="email" type="email" required name="email" className="form-input"/>
      <Input onChange={handleInputChange} value={formValues.password} placeholder="password" type="password" required minLength={6} name="password" className="form-input"/>
      <Input onChange={handleInputChange} value={formValues.confirmPassword} placeholder="confirm password" type="password" required minLength={6} name="confirmPassword" className="form-input" />
      {!!errorMessage &&
        <Alert color="danger">
          {errorMessage}
        </Alert>
      }
      <div className="w-100 d-flex flex-row justify-content-center align-items-center mb-1 mt-1">
          <Button type="submit" className="btn-orange  mb-1 mt-1">
            Register
          </Button>
      </div>
    </Form>
  )
}

export default Register;