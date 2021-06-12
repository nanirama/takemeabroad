import React from 'react'
import styled from "styled-components"
import { Button } from 'reactstrap';
import { signInWithGoogle } from '../Firebase/firebase'
import envelopeImg from '../../assets/images/envelope.png'
import googleImg from '../../assets/images/google.png'
import facebookImg from '../../assets/images/facebook.png'

const FirebaseButtons = (props)=> {
    function buttonClickHandler(e) {
        e.preventDefault()
        props.changeState('login')
    }
    return(
    <>
    <Button onClick={buttonClickHandler} className="w-100 signup_box mb-3"><Span img={envelopeImg}></Span>Signup with Email</Button>
    <Button onClick={signInWithGoogle} className="w-100 signup_box mb-3"><Span img={googleImg}></Span>Signup with Google</Button>
    <Button className="w-100 signup_box mb-3 fb"><Span img={facebookImg}></Span>Signup with Faebook</Button>
          
    {/* <button onClick={buttonClickHandler}>Button 1</button>
    <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    <button>Button 3</button> */}
    </>
)}
const Span = styled.span`
  background-image: url(${props => props.img});
`;
export default FirebaseButtons