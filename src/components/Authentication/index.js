import React from "react"

import Login from './login'
import Register from './register'
import FirebaseButtons from './FirebaseButtons'

import logoImg from '../../assets/images/logo.png'


class Authentication extends React.Component{
  constructor(){
    super()
    this.state=({
      authlevel:'index'
    })
  }
  changeState = (svalue)=>{
    this.setState({ authlevel: svalue })
  }
  render(){
    const { authlevel } = this.state
    return(
      <div className="container">
        <div className="d-flex align-items-start flex-column pt-4 px-0 py-3 login-form">
          <div className="mb-auto"><img src={logoImg} alt="Take Me Abroad" className="mb-4"/>
            <h2>Welcome to Our Abroad Community</h2>
          </div>
          <div className="d-flex flex-column wrap w-100 ">
          { authlevel && authlevel === 'index' && <FirebaseButtons changeState={this.changeState}/>}
          { authlevel && authlevel === 'login' && <Login changeState={this.changeState}/>}
          { authlevel && authlevel === 'register' && <Register changeState={this.changeState}/>}
             <div className="w-100 text-center">By signing up you accept the <a href="#"> Terms of service </a> and <a href="#"> Privacy policy</a></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Authentication
